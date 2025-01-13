<?php

namespace Drupal\ssa_questionable\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBundleBase;

/**
 * Defines the Question type configuration entity.
 *
 * @ConfigEntityType(
 *   id = "question_type",
 *   label = @Translation("Question type"),
 *   handlers = {
 *     "form" = {
 *       "add" = "Drupal\ssa_questionable\Form\QuestionTypeForm",
 *       "edit" = "Drupal\ssa_questionable\Form\QuestionTypeForm",
 *       "delete" = "Drupal\Core\Entity\EntityDeleteForm",
 *     },
 *     "list_builder" = "Drupal\ssa_questionable\QuestionTypeListBuilder",
 *     "route_provider" = {
 *       "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
 *     }
 *   },
 *   admin_permission = "administer question types",
 *   bundle_of = "question",
 *   config_prefix = "question_type",
 *   entity_keys = {
 *     "id" = "machine_name",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "add-form" = "/admin/structure/question_types/add",
 *     "edit-form" = "/admin/structure/question_types/manage/{question_type}",
 *     "delete-form" = "/admin/structure/question_types/manage/{question_type}/delete",
 *     "collection" = "/admin/structure/question_types"
 *   },
 *   config_export = {
 *     "machine_name",
 *     "label",
 *     "uuid",
 *   }
 * )
 */
class QuestionType extends ConfigEntityBundleBase {

  /**
   * The machine name of this question type.
   *
   * @var string
   */
  protected $machine_name;

  /**
   * The human-readable name of the question type.
   *
   * @var string
   */
  protected $label;

  /**
   * {@inheritdoc}
   */
  public function id() {
    return $this->machine_name;
  }

}
