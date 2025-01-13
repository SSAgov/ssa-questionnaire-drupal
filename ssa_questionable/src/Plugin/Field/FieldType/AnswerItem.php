<?php

namespace Drupal\ssa_questionable\Plugin\Field\FieldType;

use Drupal\Component\Utility\Random;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;

/**
 * Defines the 'question_multichoice_answer' field type.
 *
 * @FieldType(
 *   id = "question_multichoice_answer",
 *   label = @Translation("Answer"),
 *   no_ui = TRUE,
 *   category = @Translation("Questionable"),
 *   default_widget = "question_multichoice_answer",
 *   default_formatter = "question_multichoice_answer_default"
 * )
 */
class AnswerItem extends FieldItemBase {

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {

    if (!empty($this->title)) {
      return FALSE;
    }
    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {

    $properties['id'] = DataDefinition::create('integer')
      ->setLabel(t('ID'));
    $properties['title'] = DataDefinition::create('string')
      ->setLabel(t('Answer Text'));

    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function getConstraints() {
    $constraints = parent::getConstraints();

    $options['title']['NotBlank'] = [];

    $constraint_manager = \Drupal::typedDataManager()->getValidationConstraintManager();
    $constraints[] = $constraint_manager->create('ComplexData', $options);

    return $constraints;
  }

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {

    $columns = [
      'id' => [
        'type' => 'int',
        'size' => 'normal',
      ],
      'title' => [
        'type' => 'varchar',
        'length' => 255,
      ],
    ];

    $schema = [
      'columns' => $columns,
      // @DCG Add indexes here if necessary.
    ];

    return $schema;
  }

  /**
   * {@inheritdoc}
   */
  public static function generateSampleValue(FieldDefinitionInterface $field_definition) {

    $random = new Random();

    $values['id'] = mt_rand(-1000, 1000);

    $values['title'] = $random->word(mt_rand(1, 255));

    return $values;
  }

}
