<?php

namespace Drupal\ssa_questionable\Plugin\Validation\Constraint;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

/**
 * Validates the Unique Question ID constraint.
 */
class UniqueQuestionIdConstraintValidator extends ConstraintValidator {

  /**
   * {@inheritdoc}
   */
  public function validate($items, Constraint $constraint) {
    if (!$item = $items->first()) {
      return;
    }

    $question_id = $item->value;
    if (isset($question_id) && $question_id !== '' && $items->getEntity()->isNew()) {
      $question_id_exists = (bool) \Drupal::entityQuery('question')
        ->condition('question_id', $question_id)
        ->condition('bundle', $items->getEntity()->bundle())
        ->range(0, 1)
        ->count()
        ->execute();

      if ($question_id_exists) {
        $this->context->buildViolation($constraint->errorMessage)
          ->setParameter('%question_id', $this->formatValue($question_id))
          ->addViolation();
      }
    }
  }

}
