import { IAccordion } from '@/interfaces';
import React from 'react';
import Collapsible from 'react-collapsible';
import styles from './Accordions.module.css';

export enum EAccordionState {
  expanded = 'expanded',
  collapsed = 'collapsed',
}

export interface IAccordionState {
  [key: string]: boolean;
}

const Trigger = ({ title, open: _open }) => {
  const open = _open === true ? styles.open : '';
  return (
    <>
      <h4 className={`${styles.title} ${open}`}>{title}</h4>
      <div className={`${styles.plusMinusOuterContainer} ${open}`}>
        <div className={styles.plusMinusInnerContainer}>
          <div className={styles.horizontalLine}></div>
          <div className={styles.verticalLine}></div>
        </div>
      </div>
    </>
  );
};

export const Accordions2: React.FC<{
  accordions: IAccordion[];
}> = ({ accordions }) => {
  const [accordionsInit, set__accordionsInit] = React.useState(false);
  const [focused, set__focused] = React.useState('');
  const [accordionsState, set__accordionsState] =
    React.useState<IAccordionState>();

  React.useEffect(() => {
    if (!accordionsInit) {
      const newAccordionsState: IAccordionState = {};
      accordions.forEach((accordion) => {
        newAccordionsState[accordion.id] = false;
      });
      set__accordionsState(newAccordionsState);
      set__accordionsInit(true);
    }
  }, [accordionsInit, accordions]);

  function handleClick(aId: string) {
    const newAccordionsState: IAccordionState = { ...accordionsState };
    newAccordionsState[aId] = !newAccordionsState[aId];
    set__accordionsState(newAccordionsState);
  }

  function getContainerStyles(
    listLength: number,
    index: number,
    accId: string,
  ) {
    const thinBorder = `1px solid var(--gray-cool-90)`;
    const thickBorder = `4px solid var(--gray-cool-90)`;
    const styles: {
      borderTop?: string;
      borderBottom?: string;
    } = {};
    const _isOpen = accordionsState[accId];
    const _isClosed = !accordionsState[accId];
    const _prevIsOpen =
      index > 0 ? accordionsState[accordions[index - 1].id] : false;
    const _prevIsFocused =
      index > 0 ? accordions[index - 1].id === focused : false;
    const _isFocused = accId === focused;
    const _isLast = index + 1 === listLength;

    if (_isClosed && !_prevIsOpen && !_isFocused && !_prevIsFocused) {
      styles.borderTop = thinBorder;
    }

    if (_isClosed && _isLast && !_isFocused) {
      if (_isLast) styles.borderBottom = thinBorder;
    }

    if (_isOpen && !_isFocused) {
      styles.borderTop = thickBorder;
    }

    if (_isOpen && _isLast) {
      styles.borderBottom = thickBorder;
    }

    if (_isClosed && _prevIsOpen && !_isFocused) {
      styles.borderTop = thickBorder;
    }

    return styles;
  }

  if (!accordionsInit || !accordionsState) {
    console.log('accordionsState is not initialized');
    return null;
  }

  return (
    <div className={styles.Accordions}>
      {accordions.map((accordion, i) => {
        const accordionState: EAccordionState = accordionsState[accordion.id]
          ? EAccordionState.expanded
          : EAccordionState.collapsed;

        const isOpen = accordionState === EAccordionState.expanded;
        const lastClass = accordions.length === i + 1 ? styles.last : '';
        const openClass =
          accordionState === EAccordionState.expanded ? styles.open : '';
        const focusedClass = focused === accordion.id ? styles.focused : '';

        return (
          <Collapsible
            accordionPosition={accordion.id}
            handleTriggerClick={(accId) => {
              handleClick(accId as string);
            }}
            open={isOpen}
            containerElementProps={{
              className: `${styles.collapsible} ${lastClass} ${openClass} ${focusedClass}`,
              style: {
                ...getContainerStyles(accordions.length, i, accordion.id),
              },
              'data-test': 'collapsible',
              'data-accordion-id': accordion.id
            }}
            trigger={<Trigger title={accordion.title} open={isOpen} />}
            triggerTagName="button"
            triggerClassName={`${styles.trigger} ${lastClass}`}
            triggerOpenedClassName={`${styles.trigger} ${styles.open} ${lastClass}`}
            triggerElementProps={{
              type: 'button',
              onFocus: (_: React.FocusEvent) => {
                set__focused(accordion.id);
              },
              onBlur: (_: React.FocusEvent) => {
                set__focused('');
              },
              'data-test': `trigger-${accordion.id}`,
            }}
            key={i}
          >
            <div
              className={`${styles.content} ${lastClass} ${openClass}`}
              data-test={`accordion-content-${accordion.id}`}
            >
              <div dangerouslySetInnerHTML={{ __html: accordion.body }} />
            </div>
          </Collapsible>
        );
      })}
    </div>
  );
};
