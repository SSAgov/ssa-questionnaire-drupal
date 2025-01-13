<?php

namespace Drupal\ssa_questionable\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;

/**
 * Plugin implementation of the 'question_multichoice_answer_default' formatter.
 *
 * @FieldFormatter(
 *   id = "question_multichoice_answer_default",
 *   label = @Translation("Default"),
 *   field_types = {"question_multichoice_answer"}
 * )
 */
class AnswerDefaultFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];

    foreach ($items as $delta => $item) {

      if ($item->id) {
        $element[$delta]['id'] = [
          '#type' => 'item',
          '#title' => $this->t('id'),
          '#markup' => $item->id,
        ];
      }

      if ($item->title) {
        $element[$delta]['title'] = [
          '#type' => 'item',
          '#title' => $this->t('Answer Text'),
          '#markup' => $item->title,
        ];
      }

    }

    return $element;
  }

}
