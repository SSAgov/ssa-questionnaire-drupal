import React from 'react';
import styles from './SiteAlert.module.css';
import { ReactComponent as ErrorIcon } from '@/assets/error_outline.svg';
import { ReactComponent as WarningIcon } from '@/assets/warning.svg';
import { ReactComponent as InfoIcon } from '@/assets/info_outline.svg';

export enum ESiteAlertVariant {
  system = 'system',
  emergency = 'emergency',
  info = 'info',
}

export enum ESiteAlertType {
  standard = 'standard',
  basicSlim = 'basicSlim',
  slim = 'slim',
  simple = 'simple',
  list = 'list',
}

export enum ESiteAlertContentType {
  text = 'text',
  html = 'html',
  list = 'list',
}

export const SiteAlert: React.FC<{
  variant?: ESiteAlertVariant;
  alertType?: ESiteAlertType;
  title?: string;
  bodyType?: ESiteAlertContentType;
  bodyText?: string;
  bodyHtml?: string;
  bodyList?: { type: ESiteAlertContentType; value: string }[];
  basicSlimLink?: string;
}> = ({
  variant = ESiteAlertVariant.emergency,
  alertType = ESiteAlertType.standard,
  title = `Alert header title message`,
  bodyType = ESiteAlertContentType.html,
  bodyText = `Additional context and followup information.`,
  bodyHtml = `<p class='ssa-p-body'>Additional context and followup information including a <a href="#" class="ssa-hyperlink">link</a>.</p>`,
  bodyList = [
    {
      type: ESiteAlertContentType.html,
      value: `<p class='ssa-p-body'>The primary message and a <a class="ssa-hyperlink" href="#">link</a> for supporting context.</p>`,
    },
    {
      type: ESiteAlertContentType.html,
      value: `<p class='ssa-p-body'>Another message, and another <a class="ssa-hyperlink" href="#">link</a>.</p>`,
    },
    {
      type: ESiteAlertContentType.text,
      value: `A simple message.`,
    },
  ],
  basicSlimLink = `#`,
}) => {
  const showH3Header =
    alertType === ESiteAlertType.standard || alertType === ESiteAlertType.list;

  const iconContainer = (
    <div className={styles.iconContainer}>
      {variant === ESiteAlertVariant.system && (
        <ErrorIcon fill="1C1D1F" width={32} height={32} />
      )}
      {variant === ESiteAlertVariant.emergency && (
        <WarningIcon fill="1C1D1F" width={36} height={32} />
      )}
      {variant === ESiteAlertVariant.info && (
        <InfoIcon fill="1C1D1F" width={32} height={32} />
      )}
    </div>
  );

  const alertContent = (
    <div className={styles.alertContent}>
      {showH3Header && <h3 className="ssa-h3">{title}</h3>}
      {!showH3Header && (
        <p className={`ssa-p-body-bold ${styles.inlineTitle}`}>{title}.</p>
      )}
      <div className={styles.alertBody}>
        {bodyType === ESiteAlertContentType.text && bodyText ? (
          <p className="ssa-p-body">{bodyText}</p>
        ) : null}

        {bodyType === ESiteAlertContentType.html && bodyHtml ? (
          <div
            className={styles.bodyHtml}
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        ) : null}

        {bodyType === ESiteAlertContentType.list && bodyList ? (
          <ul className="ssa-ul margin-0">
            {bodyList.map((item, i) => (
              <li key={i}>
                {item.type === ESiteAlertContentType.html ? (
                  <div
                    className={styles.bodyHtml}
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                ) : (
                  <p className="ssa-p-body">{item.value}</p>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );

  const alertContentBasicSlim = (
    <div className={styles.alertContent}>
      <a
        href={basicSlimLink || '#'}
        className={`ssa-p-body ${styles.basicSlimText}`}
        target="_blank"
      >
        {title}. {bodyText}
      </a>
    </div>
  );

  return (
    <div
      className={`${styles.SiteAlert} ${styles[variant]} ${styles[alertType]}`}
    >
      <div className={styles.siteAlertWrapper}>
        {iconContainer}
        {alertType === ESiteAlertType.basicSlim
          ? alertContentBasicSlim
          : alertContent}
      </div>
    </div>
  );
};
