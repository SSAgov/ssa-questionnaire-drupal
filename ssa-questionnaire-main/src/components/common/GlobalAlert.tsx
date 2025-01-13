import React from 'react';
import { GlobalContext } from '@/context/global/GlobalContext';
import { IGlobalAlert, IGlobalContext } from '@/interfaces';
import styles from './GlobalAlert.module.css';
import { string } from 'prop-types';

export const GlobalAlert = () => {
  const { globalAlert }: IGlobalContext = React.useContext(GlobalContext);
  const { hide, type, heading, content }: IGlobalAlert = globalAlert;

  if (hide) return null;

  return (
    <section className={styles.alertWrapper}>
      <div className={`usa-alert usa-alert--${type}`} role="alert">
        <div className="usa-alert__body">
          <p className={`usa-alert__heading ${styles.heading}`}>{heading}</p>
          <p
            className={`usa-alert__text ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>
        </div>
      </div>
    </section>
  );
};
