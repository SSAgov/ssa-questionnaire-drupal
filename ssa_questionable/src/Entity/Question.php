<?php

namespace Drupal\ssa_questionable\Entity;

use Drupal\Core\Entity\EditorialContentEntityBase;
use Drupal\Core\Entity\EntityChangedTrait;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\ssa_questionable\QuestionInterface;
use Drupal\user\UserInterface;

/**
 * Defines the question entity class.
 *
 * @ContentEntityType(
 *   id = "question",
 *   label = @Translation("Question"),
 *   label_collection = @Translation("Questions"),
 *   label_count = @PluralTranslation(
 *     singular = "@count question",
 *     plural = "@count questions"
 *   ),
 *   bundle_label = @Translation("Question type"),
 *   handlers = {
 *     "view_builder" = "Drupal\ssa_questionable\QuestionViewBuilder",
 *     "list_builder" = "Drupal\ssa_questionable\QuestionListBuilder",
 *     "views_data" = "Drupal\views\EntityViewsData",
 *     "access" = "Drupal\ssa_questionable\QuestionAccessControlHandler",
 *     "form" = {
 *       "add" = "Drupal\ssa_questionable\Form\QuestionForm",
 *       "edit" = "Drupal\ssa_questionable\Form\QuestionForm",
 *       "delete" = "Drupal\Core\Entity\ContentEntityDeleteForm",
 *       "delete-multiple-confirm" = "Drupal\Core\Entity\Form\DeleteMultipleForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
 *     }
 *   },
 *   base_table = "question",
 *   data_table = "question_field_data",
 *   revision_table = "question_revision",
 *   revision_data_table = "question_field_revision",
 *   show_revision_ui = TRUE,
 *   translatable = TRUE,
 *   admin_permission = "administer question types",
 *   entity_keys = {
 *     "id" = "qid",
 *     "revision" = "vid",
 *     "langcode" = "langcode",
 *     "bundle" = "bundle",
 *     "label" = "question_text",
 *     "uuid" = "uuid",
 *     "published" = "status",
 *     "owner" = "uid",
 *   },
 *   revision_metadata_keys = {
 *     "revision_user" = "revision_uid",
 *     "revision_created" = "revision_timestamp",
 *     "revision_log_message" = "revision_log"
 *   },
 *   links = {
 *     "add-form" = "/admin/components/question/add/{question_type}",
 *     "add-page" = "/admin/components/question/add",
 *     "canonical" = "/question/{question}",
 *     "edit-form" = "/admin/components/question/{question}/edit",
 *     "delete-form" = "/admin/components/question/{question}/delete",
 *     "delete-multiple-form" = "/admin/components/question/delete",
 *     "collection" = "/admin/components/questions"
 *   },
 *   bundle_entity_type = "question_type",
 *   field_ui_base_route = "entity.question_type.edit_form"
 * )
 */
class Question extends EditorialContentEntityBase implements QuestionInterface {

  use EntityChangedTrait;

  /**
   * {@inheritdoc}
   *
   * When a new question entity is created, set the uid entity reference to
   * the current user as the creator of the entity.
   */
  public static function preCreate(EntityStorageInterface $storage_controller, array &$values) {
    parent::preCreate($storage_controller, $values);
    $values += ['uid' => \Drupal::currentUser()->id()];
  }

  /**
   * {@inheritdoc}
   */
  public function getQuestionId() {
    return $this->get('question_id')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setQuestionId($id) {
    $this->set('question_id', $id);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getQuestionText() {
    return $this->get('question_text')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setQuestionText($text) {
    $this->set('question_text', $text);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getAnswers() {
    return $this->get('answers')->getValue();
  }

  /**
   * {@inheritdoc}
   */
  public function setAnswers($answers) {
    $this->set('answers', $answers);
    return $this;
  }

  /**
   * Whether a question has multiple choice answers.
   *
   * @return bool
   *   Returns TRUE if the question has answers, otherwise FALSE.
   */
  public function hasAnswers() {
    return (bool) $this->get('answers');
  }

  /**
   * {@inheritdoc}
   */
  public function isEnabled() {
    return (bool) $this->get('status')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setStatus($status) {
    $this->set('status', $status);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getCreatedTime() {
    return $this->get('created')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setCreatedTime($timestamp) {
    $this->set('created', $timestamp);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getOwner() {
    return $this->get('uid')->entity;
  }

  /**
   * {@inheritdoc}
   */
  public function getOwnerId() {
    return $this->get('uid')->target_id;
  }

  /**
   * {@inheritdoc}
   */
  public function setOwnerId($uid) {
    $this->set('uid', $uid);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function setOwner(UserInterface $account) {
    $this->set('uid', $account->id());
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function preSave(EntityStorageInterface $storage) {
    parent::preSave($storage);

    $answers = $this->getAnswers();

    if ($this->isNew() || empty($this->original->answers)) {
      array_walk($answers, [$this, 'setAnswerId']);
    }
    else {
      $original_answers = $this->original->getAnswers();
      // We need to set an id for each new answer.
      $additional = count($answers) - count($original_answers);
      foreach ($answers as &$answer) {
        if ($additional > 0 && !empty($answer['title']) && is_null($answer['id'])) {
          $answer['id'] = count($answers) - $additional--;
        }
      }

    }

    $this->setAnswers($answers);

  }

  /**
   * Callback function for array_walk to set the answer id to the array index.
   *
   * @param array $value
   *   The value.
   * @param mixed $index
   *   The index.
   */
  protected function setAnswerId(array &$value, $index) {
    $value['id'] = $index;
  }

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {

    $fields = parent::baseFieldDefinitions($entity_type);

    // The question ID.
    $fields['question_id'] = BaseFieldDefinition::create('string')
      ->setRevisionable(TRUE)
      ->setTranslatable(FALSE)
      ->setLabel(t('Question ID'))
      ->setDescription(t('The ID of the question.'))
      ->setRequired(TRUE)
      ->addConstraint('UniqueQuestionId')
      ->setSetting('max_length', 10)
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'string',
        'weight' => -5,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => -5,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // The question text.
    $fields['question_text'] = BaseFieldDefinition::create('string')
      ->setRevisionable(TRUE)
      ->setTranslatable(TRUE)
      ->setLabel(t('Question Text'))
      ->setDescription(t('The text of the question.'))
      ->setRequired(TRUE)
      ->setSetting('max_length', 255)
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'string',
        'weight' => -4,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => -4,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // The question answers.
    $fields['answers'] = BaseFieldDefinition::create('question_multichoice_answer')
      ->setRevisionable(TRUE)
      ->setTranslatable(TRUE)
      ->setLabel(t('Multiple choice answer'))
      ->setDescription(t('The list of answers. Leave blank to indicate user entry.'))
      ->setSetting('max_length', 255)
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'question_multichoice_answer_default',
        'weight' => -3,
      ])
      ->setDisplayOptions('form', [
        'type' => 'question_multichoice_answer',
        'weight' => -3,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE)
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED);

    // The question help text.
    $fields['question_help'] = BaseFieldDefinition::create('string_long')
      ->setRevisionable(TRUE)
      ->setTranslatable(TRUE)
      ->setLabel(t('Question Help'))
      ->setDescription(t('Help text for the question.'))
      ->setSetting('max_length', 255)
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'text_default',
        'weight' => -2,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textarea',
        'settings' => ['rows' => 4],
        'weight' => -2,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // The question context.
    $fields['question_context'] = BaseFieldDefinition::create('string_long')
      ->setRevisionable(TRUE)
      ->setTranslatable(TRUE)
      ->setLabel(t('Question context'))
      ->setDescription(t('The context of the question.'))
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'text_default',
        'weight' => -2,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textarea',
        'settings' => ['rows' => 4],
        'weight' => -1,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['status'] = BaseFieldDefinition::create('boolean')
      ->setRevisionable(TRUE)
      ->setLabel(t('Status'))
      ->setDescription(t('A boolean indicating whether the question is enabled.'))
      ->setDefaultValue(TRUE)
      ->setSetting('on_label', 'Enabled')
      ->setDisplayOptions('form', [
        'type' => 'boolean_checkbox',
        'settings' => [
          'display_label' => FALSE,
        ],
        'weight' => 10,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['uid'] = BaseFieldDefinition::create('entity_reference')
      ->setRevisionable(TRUE)
      ->setTranslatable(TRUE)
      ->setLabel(t('Author'))
      ->setDescription(t('The user ID of the question author.'))
      ->setSetting('target_type', 'user')
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => 60,
          'placeholder' => '',
        ],
        'weight' => 15,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['created'] = BaseFieldDefinition::create('created')
      ->setLabel(t('Authored on'))
      ->setTranslatable(TRUE)
      ->setDescription(t('The time that the question was created.'))
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayOptions('form', [
        'type' => 'datetime_timestamp',
        'weight' => 20,
      ]);

    $fields['changed'] = BaseFieldDefinition::create('changed')
      ->setLabel(t('Changed'))
      ->setTranslatable(TRUE)
      ->setDescription(t('The time that the question was last edited.'));

    return $fields;
  }

}
