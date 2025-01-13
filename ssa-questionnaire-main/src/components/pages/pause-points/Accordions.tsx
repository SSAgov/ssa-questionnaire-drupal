import { IAccordion } from '@/interfaces';
import React from 'react';
import './Accordions.css';

export enum EAccordionState {
  expanded = 'expanded',
  collapsed = 'collapsed',
}

export interface IAccordionState {
  [key: string]: boolean;
}

export const Accordions: React.FC<{
  accordions: IAccordion[];
}> = ({ accordions }) => {
  const [accordionsInit, set__accordionsInit] = React.useState(false);
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

  if (!accordionsInit || !accordionsState) {
    console.log('accordionsState is not initialized');
    return null;
  }

  return (
    <div className="pause-point-accordions">
      <div className="usa-accordion">
        {accordions.map((accordion, i) => {
          const accordionId = `a${i + 1}`;
          const accordionState: EAccordionState = accordionsState[accordion.id]
            ? EAccordionState.expanded
            : EAccordionState.collapsed;

          const last = accordions.length === (i+1) ? 'last' : '';

          return (
            <React.Fragment key={i}>
              <h4 className={`usa-accordion__heading ${accordionState}`}>
                <button
                  type="button"
                  className={`usa-accordion__button ${last} ${accordionState}`}
                  aria-expanded={
                    accordionState === EAccordionState.expanded
                      ? 'true'
                      : 'false'
                  }
                  aria-controls={accordionId}
                  onClick={(e) => handleClick(accordion.id)}
                >
                  {accordion.title}
                </button>
              </h4>
              <div
                id={accordionId}
                className={`usa-accordion__content usa-prose ${last} ${accordionState}`}
                hidden={
                  accordionState === EAccordionState.collapsed ? true : false
                }
              >
                <div dangerouslySetInnerHTML={{ __html: accordion.body }} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
