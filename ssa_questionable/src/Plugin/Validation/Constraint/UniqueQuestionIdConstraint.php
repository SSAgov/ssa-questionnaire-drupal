<?php

namespace Drupal\ssa_questionable\Plugin\Validation\Constraint;

use Symfony\Component\Validator\Constraint;

/**
 * Provides a Unique Question ID constraint.
 *
 * @Constraint(
 *   id = "UniqueQuestionId",
 *   label = @Translation("Unique Question ID", context = "Validation"),
 * )
 */
class UniqueQuestionIdConstraint extends Constraint {

  /**
   * The constraint error message.
   *
   * @var string
   */
  public $errorMessage = 'The Question ID %question_id is already in use and must be unique.';

}
