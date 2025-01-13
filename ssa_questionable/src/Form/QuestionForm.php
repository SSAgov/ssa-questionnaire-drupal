<?php

namespace Drupal\ssa_questionable\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form controller for the question entity edit forms.
 */
class QuestionForm extends ContentEntityForm {

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);
    if (!$this->entity->isNew()) {
      $form['question_id']['widget'][0]['value']['#disabled'] = TRUE;
    }
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {

    $entity = $this->getEntity();
    $result = $entity->save();
    $link = $entity->toLink($this->t('View'))->toRenderable();

    $message_arguments = ['%label' => $this->entity->label()];
    $logger_arguments = $message_arguments + ['link' => render($link)];

    if ($result == SAVED_NEW) {
      $this->messenger()->addStatus($this->t('New question %label has been created.', $message_arguments));
      $this->logger('ssa_questionable')->notice('Created new question %label', $logger_arguments);
    }
    else {
      $this->messenger()->addStatus($this->t('The question %label has been updated.', $message_arguments));
      $this->logger('ssa_questionable')->notice('Updated new question %label.', $logger_arguments);
    }

    $form_state->setRedirect('entity.question.canonical', ['question' => $entity->id()]);
  }

}
