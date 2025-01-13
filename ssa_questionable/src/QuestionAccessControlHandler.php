<?php

namespace Drupal\ssa_questionable;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Defines the access control handler for the question entity type.
 */
class QuestionAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    if ($account->hasPermission('administer question')) {
      return AccessResult::allowed()->cachePerPermissions();
    }

    /** @var \Drupal\ssa_questionable\Entity\Question $entity */
    $is_owner = ($account->id() && $account->id() === $entity->getOwnerId());
    switch ($operation) {
      case 'view':
        if ($entity->isPublished()) {
          $access_result = AccessResult::allowedIf($account->hasPermission('view question'))
            ->cachePerPermissions()
            ->addCacheableDependency($entity);
          if (!$access_result->isAllowed()) {
            $access_result->setReason("The 'view question' permission is required when the question item is published.");
          }
        }
        elseif ($account->hasPermission('view own unpublished question')) {
          $access_result = AccessResult::allowedIf($is_owner)
            ->cachePerPermissions()
            ->cachePerUser()
            ->addCacheableDependency($entity);
          if (!$access_result->isAllowed()) {
            $access_result->setReason("The user must be the owner and the 'view own unpublished question' permission is required when the question item is unpublished.");
          }
        }
        else {
          $access_result = AccessResult::neutral()
            ->cachePerPermissions()
            ->addCacheableDependency($entity)
            ->setReason("The user must be the owner and the 'view own unpublished question' permission is required when the question item is unpublished.");
        }
        return $access_result;

      case 'update':
        if ($account->hasPermission('edit any question')) {
          return AccessResult::allowed()->cachePerPermissions();
        }
        if ($account->hasPermission('edit own question') && $is_owner) {
          return AccessResult::allowed()->cachePerPermissions()->cachePerUser()->addCacheableDependency($entity);
        }
        return AccessResult::neutral("The following permissions are required: 'edit any question' OR 'edit own question'.")->cachePerPermissions();

      case 'delete':
        if ($account->hasPermission('delete any question')) {
          return AccessResult::allowed()->cachePerPermissions();
        }
        if ($account->hasPermission('delete own question') && $is_owner) {
          return AccessResult::allowed()->cachePerPermissions()->cachePerUser()->addCacheableDependency($entity);
        }
        return AccessResult::neutral("The following permissions are required: 'delete any question' OR 'delete own question'.")->cachePerPermissions();

      default:
        // No opinion.
        return AccessResult::neutral();
    }

  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermissions($account,
      ['create question', 'administer question'], 'OR');
  }

}
