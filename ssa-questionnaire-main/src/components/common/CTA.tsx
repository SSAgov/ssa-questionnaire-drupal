import { Button, Laptop, Office, Phone } from '@/components/common';
import { EButtonVariant } from '@/interfaces';
import React from 'react';
import styles from './CTA.module.css';

export enum EIcon {
  laptop = 'laptop',
  office = 'office',
  phone = 'phone',
}

export interface ICTABodyBase {
  type: 'html' | 'jsx';
}

export interface ICTABodyHTML extends ICTABodyBase {
  html: string;
  jsx?: JSX.Element;
}

export interface ICTABodyJSX extends ICTABodyBase {
  jsx: JSX.Element;
  html?: string;
}

export const CTA: React.FC<{
  icon: EIcon;
  title: string;
  body: ICTABodyHTML | ICTABodyJSX;
  btnTxt?: string;
  offsetSubtitleAndAccordions: boolean;
  offsetLackOfBottomSection: boolean;
  btnCb?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  btnDataTestAttr?: string;
}> = ({
  icon,
  title,
  body,
  btnTxt,
  btnCb,
  offsetSubtitleAndAccordions,
  offsetLackOfBottomSection,
  btnDataTestAttr,
}) => {
  function getIcon() {
    switch (icon) {
      case EIcon.laptop:
        return <Laptop className={styles.icon} />;

      case EIcon.office:
        return <Office className={styles.icon} />;

      case EIcon.phone:
        return <Phone className={styles.icon} />;

      default:
        return null;
    }
  }

  const btnDataTestProp = btnDataTestAttr
    ? { 'data-test': btnDataTestAttr }
    : {};

  return (
    <div
      className={`${styles.CTA} ${
        offsetSubtitleAndAccordions ? styles.moveUp : ''
      } ${offsetLackOfBottomSection ? styles.noBottomSections : ''}`}
    >
      <div className={styles.iconAndTitleWrapper}>
        <div className={styles.iconWrapper}>{getIcon()}</div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.contentWrapper}>
        {body.html ? (
          <div
            className={`${styles.body} ${!btnTxt ? styles.noMarginBottom : ''}`}
            dangerouslySetInnerHTML={{ __html: body.html }}
          />
        ) : (
          <div
            className={`${styles.body} ${!btnTxt ? styles.noMarginBottom : ''}`}
          >
            {body.jsx}
          </div>
        )}
      </div>
      {btnTxt && (
        <div className={styles.btnContainer}>
          <Button
            variant={EButtonVariant.primary}
            onClick={btnCb}
            className={styles.ctaBtn}
            {...btnDataTestProp}
          >
            {btnTxt}
          </Button>
        </div>
      )}
    </div>
  );
};
