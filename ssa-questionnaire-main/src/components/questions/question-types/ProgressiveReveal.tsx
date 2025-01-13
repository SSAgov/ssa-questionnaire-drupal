import React from 'react';
import {
  TransitionGroup,
  CSSTransition,
  Transition,
} from 'react-transition-group';
import {
  EQuestionInputNames,
  IChoice,
  IProgressiveRevealeInputs,
  IQuestion,
  IStateInfo,
  QuestTypeProps,
} from '@/interfaces';
import radiosStyles from './MultipleChoice.module.css';
import styles from './ProgressiveReveal.module.css';
import { ComboBox } from './ComboBox';

const duration = 100;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, max-height ${duration}ms ease-in-out`,
  opacity: 0,
  maxHeight: '0px',
};

const transitionStyles = {
  entering: { opacity: 1, maxHeight: '100px' },
  entered: { opacity: 1, maxHeight: '100px' },
  exiting: { opacity: 0, maxHeight: '0px' },
  exited: { opacity: 0, maxHeight: '0px' },
};

export const ProgressiveReveal: React.FC<QuestTypeProps> = ({
  inputs,
  question,
  handleChange,
}) => {
  const progressiveRevealInputs = inputs.progressiveRevealInputs;
  const { mainInput, followupInput } = progressiveRevealInputs;
  const [selectedState, set__selectedState] = React.useState(null);
  const transitionNodeRef = React.useRef(null);

  const { choices, progressiveRevealTriggers, progressiveRevealLabel } =
    question;

  function handleRadiosChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newPRInputs: IProgressiveRevealeInputs = {
      ...progressiveRevealInputs,
    };
    newPRInputs.mainInput = e.target.value;
    if (!progressiveRevealTriggers.includes(e.target.value)) {
      newPRInputs.followupInput = null;
    }
    handleChange<IProgressiveRevealeInputs>(
      EQuestionInputNames.progressiveRevealInputs,
      newPRInputs,
    );
  }

  function handleComboBoxChange(newSelectedState: IStateInfo): void {
    set__selectedState(newSelectedState);
    const newPRInputs: IProgressiveRevealeInputs = {
      ...progressiveRevealInputs,
    };
    newPRInputs.followupInput = newSelectedState;
    handleChange<IProgressiveRevealeInputs>(
      EQuestionInputNames.progressiveRevealInputs,
      newPRInputs,
    );
  }

  const showComboBox = progressiveRevealTriggers.includes(mainInput);

  if (!choices || !progressiveRevealTriggers || !progressiveRevealLabel)
    return null;

  return (
    <div className={styles.ProgressiveReveal}>
      <fieldset className={`usa-fieldset ${radiosStyles.fieldset}`}>
        {choices.map((choice: IChoice, i: number) => {
          return (
            <div className={`usa-radio ${radiosStyles.radioGroup}`} key={i}>
              <input
                className={`usa-radio__input usa-radio__input--tile ${radiosStyles.radiosInput}`}
                id={choice.id}
                type="radio"
                name={choice.id}
                value={choice.value}
                checked={mainInput === choice.value}
                onChange={handleRadiosChange}
                data-test={`radio-button-${choice.id}`}
              />
              <label
                className={`usa-radio__label ${radiosStyles.radiosLabel}`}
                htmlFor={choice.id}
                data-test={`radio-label-${choice.id}`}
              >
                {choice.title}
              </label>
            </div>
          );
        })}
      </fieldset>
      <Transition
        transitionNodeRef={transitionNodeRef}
        in={showComboBox}
        timeout={duration}
      >
        {(state) => (
          <div
            ref={transitionNodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <ComboBox
              onSelection={handleComboBoxChange}
              defaultSelectedItem={followupInput}
              showComboBox={showComboBox}
              label={progressiveRevealLabel}
            />
          </div>
        )}
      </Transition>
      {/* <TransitionGroup className="combobox-group"> */}
      {/* <CSSTransition
        in={showComboBox}
        transitionNodeRef={transitionNodeRef}
        // key={mainInput}
        timeout={500}
        classNames="alert"
      >
        {showComboBox ? (
          <ComboBox
            ref={transitionNodeRef}
            onSelection={handleComboBoxChange}
            defaultSelectedItem={followupInput}
          />
        ) : (
          <div />
        )}
      </CSSTransition> */}
      {/* </TransitionGroup> */}
    </div>
  );
};
