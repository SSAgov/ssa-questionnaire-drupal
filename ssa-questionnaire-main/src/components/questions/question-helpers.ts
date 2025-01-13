import { meetMinAgeReq } from '@/context/steps/utils';
import {
  EQuestionInputNames,
  EQuestionType,
  IDateInputs,
  IDatePart,
  IProgressiveRevealeInputs,
  IQuestion,
  IStepsContentItem,
  QuestTypeProps,
} from '@/interfaces';
import {
  dateUnitIsValid,
  getAge,
  toBirthdate,
} from './question-types/dateFieldHelpers';

export interface IAnswerIsValidProps extends IStepsContentItem {
  inputs: IQuestionInputs;
}

export const answerIsValid = ({
  question,
  inputs,
  questionType,
}: IAnswerIsValidProps) => {
  const { textInput, dateInputs, checkboxesInput, progressiveRevealInputs } =
    inputs;
  const dateInputs_ = dateInputs as IDateInputs;
  if (questionType === EQuestionType.date) {
    if (!dateInputs_.month || !dateInputs_.day || !dateInputs_.year) {
      return false;
    }
    if (
      dateInputs_.month.length < 1 ||
      dateInputs_.day.length < 1 ||
      dateInputs_.year.length < 4
    ) {
      return false;
    }
    const minAge18 = { months: 0, years: 18 };
    const birthdayToString = toBirthdate(dateInputs);
    const age = getAge(birthdayToString);
    const answersFromStepsContext = null;
    const isOver18 = meetMinAgeReq(minAge18, answersFromStepsContext, { age });

    const currentYear = new Date().getFullYear();
    const monthIsValid = dateUnitIsValid('month', dateInputs_.month || '');
    const dayIsValid = dateUnitIsValid('day', dateInputs_.day || '');
    // Year is valid if it is in the correct format, it is entered for someone over 18 and not born in the current year
    const yearIsValid =
      dateUnitIsValid('year', dateInputs_.year || '') &&
      isOver18 &&
      `${dateInputs_.year}` !== `${currentYear}`;

    if (!monthIsValid || !dayIsValid || !yearIsValid) {
      return false;
    }
    return true;
  }

  if (questionType === EQuestionType.checkboxes) {
    if (
      !checkboxesInput ||
      !Array.isArray(checkboxesInput) ||
      !checkboxesInput.length
    )
      return false;
    return true;
  }

  if (questionType === EQuestionType.progressive_reveal) {
    if (
      !progressiveRevealInputs ||
      !progressiveRevealInputs.mainInput ||
      !question.progressiveRevealTriggers
    )
      return false;

    const answerMustHaveStateSelection =
      question.progressiveRevealTriggers.includes(
        progressiveRevealInputs.mainInput,
      );
    if (answerMustHaveStateSelection && !progressiveRevealInputs.followupInput)
      return false;

    return true;
  }

  if (!textInput) return false;
  return true;
};

export interface IQuestionInputs {
  textInput: string;
  checkboxesInput: string[];
  dateInputs: IDateInputs;
  progressiveRevealInputs: IProgressiveRevealeInputs;
}

export const defaultQuestionInputs: IQuestionInputs = {
  textInput: '',
  checkboxesInput: [],
  dateInputs: {
    month: '',
    day: '',
    year: '',
  },
  progressiveRevealInputs: {
    mainInput: '',
    followupInput: null,
  },
};

export const questType2InputMapper = {
  [EQuestionType.multiple_choice]: EQuestionInputNames.textInput,
  [EQuestionType.multiple_actions]: EQuestionInputNames.textInput,
  [EQuestionType.date]: EQuestionInputNames.dateInputs,
  [EQuestionType.checkboxes]: EQuestionInputNames.checkboxesInput,
  [EQuestionType.progressive_reveal]:
    EQuestionInputNames.progressiveRevealInputs,
  [EQuestionType.textarea]: EQuestionInputNames.textInput,
};
