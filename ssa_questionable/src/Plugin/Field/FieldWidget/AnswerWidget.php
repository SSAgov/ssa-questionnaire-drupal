<?php

namespace Drupal\ssa_questionable\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\Validator\ConstraintViolationInterface;

/**
 * Defines the 'question_multichoice_answer' field widget.
 *
 * @FieldWidget(
 *   id = "question_multichoice_answer",
 *   label = @Translation("Answer"),
 *   field_types = {"question_multichoice_answer"},
 * )
 */
class AnswerWidget extends WidgetBase {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {

    $id = $items[$delta]->id ?? NULL;

    $element['id'] = [
      '#type' => 'value',
      '#value' => $id,
    ];

    $element['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Answer Text (@id)', ['@id' => $id]),
      '#default_value' => $items[$delta]->title ?? NULL,
      '#size' => 20,
    ];

    $element['#theme_wrappers'] = ['container', 'form_element'];
    $element['#attributes']['class'][] = 'container-inline';
    $element['#attributes']['class'][] = 'question-multichoice-answer-elements';
    $element['#attached']['library'][] = 'ssa_questionable/question-multichoice_answer';

    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public function errorElement(array $element, ConstraintViolationInterface $violation, array $form, FormStateInterface $form_state) {
    return isset($violation->arrayPropertyPath[0]) ? $element[$violation->arrayPropertyPath[0]] : $element;
  }

  /**
   * {@inheritdoc}
   */
  public function massageFormValues(array $values, array $form, FormStateInterface $form_state) {
    foreach ($values as $delta => $value) {
      if ($value['title'] === '') {
        $values[$delta]['title'] = NULL;
      }
    }
    return $values;
  }

}
