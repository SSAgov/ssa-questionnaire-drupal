<?php

namespace Drupal\ssa_questionable;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\Core\Entity\EntityPublishedInterface;
use Drupal\Core\Entity\RevisionLogInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface defining a question entity type.
 */
interface QuestionInterface extends ContentEntityInterface, EntityChangedInterface, RevisionLogInterface, EntityOwnerInterface, EntityPublishedInterface {

  /**
   * Gets the question ID.
   *
   * @return string
   *   ID of the question.
   */
  public function getQuestionId();

  /**
   * Sets the question ID.
   *
   * @param string $id
   *   The question ID.
   *
   * @return \Drupal\ssa_questionable\QuestionInterface
   *   The called question entity.
   */
  public function setQuestionId($id);

  /**
   * Gets list of answer objects.
   *
   * @return array
   *   Array of answer items.
   */
  public function getAnswers();

  /**
   * Set the multiple choice answer array.
   *
   * @param array $answers
   *   The answers.
   *
   * @return \Drupal\ssa_questionable\QuestionInterface
   *   The called question entity.
   */
  public function setAnswers(array $answers);

  /**
   * Whether a question has multiple choice answers.
   *
   * @return bool
   *   Returns TRUE if the question has answers, otherwise FALSE.
   */
  public function hasAnswers();

  /**
   * Gets the question text.
   *
   * @return string
   *   Text of the question.
   */
  public function getQuestionText();

  /**
   * Sets the question text.
   *
   * @param string $text
   *   The question text.
   *
   * @return \Drupal\ssa_questionable\QuestionInterface
   *   The called question entity.
   */
  public function setQuestionText($text);

  /**
   * Gets the question creation timestamp.
   *
   * @return int
   *   Creation timestamp of the question.
   */
  public function getCreatedTime();

  /**
   * Sets the question creation timestamp.
   *
   * @param int $timestamp
   *   The question creation timestamp.
   *
   * @return \Drupal\ssa_questionable\QuestionInterface
   *   The called question entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Returns the question status.
   *
   * @return bool
   *   TRUE if the question is enabled, FALSE otherwise.
   */
  public function isEnabled();

  /**
   * Sets the question status.
   *
   * @param bool $status
   *   TRUE to enable this question, FALSE to disable.
   *
   * @return \Drupal\ssa_questionable\QuestionInterface
   *   The called question entity.
   */
  public function setStatus($status);

}
