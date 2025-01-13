import { NO, YES } from '@/constants';
import { IProgressiveRevealeInputs } from '@/interfaces';
import {
  ADULT_CITIZEN_DOB,
  ADULT_CITIZEN_SEX_ID,
  ADULT_NON_CITIZEN_DOB,
  CHILD_CITIZEN_DOB,
  CHILD_NON_CITIZEN_DOB,
  PARENTS_NAME,
  PLACE_OF_BIRTH,
} from './constants';

export enum EQual {
  yes = 'yes',
  yes_only_dl = 'yes_only_dl',
  no = 'no',
}

export interface IAnswerBreakdownReturnProps {
  noChanges: boolean;
  onlyName: boolean;
  includesName: boolean;
  onlyDob: boolean;
  includesDob: boolean;
  onlyPlaceOfBirth: boolean;
  includesPlaceOfBirth: boolean;
  onlyParentsName: boolean;
  includesParentsName: boolean;
  onlySexId: boolean;
  includesSexId: boolean;
  noneOrOnlyName: boolean;
  singleChangeOtherThanName: boolean;
  otherThanNameOrMultiple: boolean;
  anyChange: boolean;
  oneOfPlaceDobParentSexid: boolean;
}

export function isStateIdEligible(state: string, docType: string): boolean {
  const quals = qual_AAMVA();
  const qual = quals[state];
  if (qual === EQual.yes_only_dl) {
    if (docType === 'drivers_license') return true;
    return false;
  }
  if (qual === EQual.yes) return true;
  return false;
  // return eligibleIdStates.includes(state);
}

export function isStateVitalsParticipating(state: string): boolean {
  const quals = qual_NAPHSIS();
  const qual = quals[state];
  if (qual === EQual.yes) return true;
  return false;
}

export function marriedNameChangeAnswer(
  marriedAnswer: IProgressiveRevealeInputs,
): {
  changingNameBecauseMarried: boolean;
  notChangingNameBecauseMarried: boolean;
} {
  const result = {
    changingNameBecauseMarried: false,
    notChangingNameBecauseMarried: false,
  };

  if (marriedAnswer.mainInput === YES) result.changingNameBecauseMarried = true;
  if (marriedAnswer.mainInput === NO)
    result.notChangingNameBecauseMarried = true;

  return result;
}

export const changeQuestionAnswer = (
  cqAnswer: string[],
): IAnswerBreakdownReturnProps =>
  answerBreakdown({ answer: cqAnswer, nameId: '0', dobId: ADULT_CITIZEN_DOB });

export const NDAnswerBreakdown = (
  ndAnswer: string[],
): IAnswerBreakdownReturnProps =>
  answerBreakdown({
    answer: ndAnswer,
    nameId: '1',
    dobId: ADULT_NON_CITIZEN_DOB,
  });

export const AAQuestionAnswer = (
  aaAnswer: string[],
): IAnswerBreakdownReturnProps =>
  answerBreakdown({ answer: aaAnswer, nameId: '0', dobId: CHILD_CITIZEN_DOB });

export const NCQuestionAnswer = (
  aaAnswer: string[],
): IAnswerBreakdownReturnProps =>
  answerBreakdown({
    answer: aaAnswer,
    nameId: '1',
    dobId: CHILD_NON_CITIZEN_DOB,
  });

export function answerBreakdown({
  answer,
  nameId,
  dobId = ADULT_CITIZEN_DOB,
  sexId = ADULT_CITIZEN_SEX_ID,
}: {
  answer: string[];
  nameId: string;
  dobId?: string;
  sexId?: string;
}): IAnswerBreakdownReturnProps {
  const result = {
    noChanges: false,
    onlyName: false,
    onlyDob: false,
    onlyPlaceOfBirth: false,
    onlyParentsName: false,
    onlySexId: false,
    noneOrOnlyName: false,
    singleChangeOtherThanName: false,
    otherThanNameOrMultiple: false,
    anyChange: false,
    includesName: false,
    includesDob: false,
    includesPlaceOfBirth: false,
    includesParentsName: false,
    includesSexId: false,
    oneOfPlaceDobParentSexid: false
  };
  const NAME = nameId;
  const NONE = 'none_of_the_above';
  const noneOnly = answer.length === 1 && answer.includes(NONE);
  const nameOnly = answer.length === 1 && answer.includes(NAME);
  const includesName = answer.includes(NAME);
  const onlyDob = answer.length === 1 && answer.includes(dobId);
  const includesDob = answer.includes(dobId);
  const onlyPlaceOfBirth =
    answer.length === 1 && answer.includes(PLACE_OF_BIRTH);
  const includesPlaceOfBirth = answer.includes(PLACE_OF_BIRTH);
  const onlyParentsName = answer.length === 1 && answer.includes(PARENTS_NAME);
  const includesParentsName = answer.includes(PARENTS_NAME);
  const onlySexId = answer.length === 1 && answer.includes(sexId);
  const includesSexId = answer.includes(sexId);
  const notNone = !answer.includes(NONE);
  const notName = !answer.includes(NAME);
  const anyChange = notNone && answer.length >= 1;
  const isSingleAnswer =
    answer.filter((x) => x !== NAME && x !== NONE).length === 1;
  const isMultipleExceptNameAndNone =
    answer.filter((x) => x !== NAME && x !== NONE).length > 1;
  const oneOfPlaceDobParentSexid = answer.every((x) =>
    [PLACE_OF_BIRTH, dobId, PARENTS_NAME, sexId].includes(x),
  );

  const isMultiple = answer.length > 1;

  if (nameOnly) result.onlyName = true;

  if (onlyDob) result.onlyDob = true;

  if (onlyPlaceOfBirth) result.onlyPlaceOfBirth = true;

  if (onlyParentsName) result.onlyParentsName = true;

  if (onlySexId) result.onlySexId = true;

  if (includesName) result.includesName = true;
  if (includesDob) result.includesDob = true;
  if (includesPlaceOfBirth) result.includesPlaceOfBirth = true;
  if (includesParentsName) result.includesParentsName = true;
  if (includesSexId) result.includesSexId = true;

  if (noneOnly) result.noChanges = true;

  if (noneOnly || nameOnly) result.noneOrOnlyName = true;

  if (notNone && notName && isSingleAnswer)
    result.singleChangeOtherThanName = true;

  if ((notNone && notName) || (notNone && isMultiple))
    result.otherThanNameOrMultiple = true;

  if (anyChange) result.anyChange = true;

  if (oneOfPlaceDobParentSexid) result.oneOfPlaceDobParentSexid = true;

  return result;
}

export function qual_AAMVA(): {
  [key: string]: 'yes' | 'no' | 'yes_only_dl';
} {
  return {
    AL: 'yes',
    AK: 'no',
    AS: 'no',
    AZ: 'yes',
    AR: 'yes',
    CA: 'yes',
    CO: 'yes',
    CT: 'yes',
    DE: 'yes_only_dl',
    DC: 'yes',
    FM: 'no',
    FL: 'yes',
    GA: 'yes',
    GU: 'no',
    HI: 'yes',
    ID: 'yes',
    IL: 'yes',
    IN: 'yes',
    IA: 'yes',
    KS: 'yes',
    KY: 'yes',
    LA: 'yes',
    ME: 'yes',
    MH: 'no',
    MD: 'yes',
    MA: 'yes',
    MI: 'yes',
    MN: 'yes',
    MS: 'yes',
    MO: 'yes',
    MT: 'yes',
    NE: 'yes',
    NV: 'yes_only_dl',
    NH: 'no',
    NJ: 'yes',
    NM: 'yes',
    NY: 'yes',
    NC: 'yes',
    ND: 'yes',
    MP: 'no',
    OH: 'yes',
    OK: 'no',
    OR: 'yes',
    PW: 'no',
    PA: 'yes',
    PR: 'no',
    RI: 'yes',
    SC: 'yes',
    SD: 'yes',
    TN: 'yes',
    TX: 'yes',
    UT: 'yes',
    VT: 'yes',
    VI: 'no',
    VA: 'yes',
    WA: 'yes',
    WV: 'no',
    WI: 'yes',
    WY: 'yes',
  };
}

export function qual_NAPHSIS(): {
  [key: string]: 'yes' | 'no';
} {
  return {
    AL: 'no',
    AK: 'no',
    AS: 'no',
    AZ: 'no',
    AR: 'yes',
    CA: 'no',
    CO: 'no',
    CT: 'no',
    DE: 'no',
    DC: 'no',
    FM: 'no',
    FL: 'no',
    GA: 'yes',
    GU: 'no',
    HI: 'no',
    ID: 'no',
    IL: 'no',
    IN: 'no',
    IA: 'no',
    KS: 'no',
    KY: 'no',
    LA: 'no',
    ME: 'no',
    MH: 'no',
    MD: 'no',
    MA: 'no',
    MI: 'no',
    MN: 'no',
    MS: 'no',
    MO: 'yes',
    MT: 'no',
    NE: 'no',
    NV: 'no',
    NH: 'no',
    NJ: 'no',
    NM: 'no',
    NY: 'no',
    NC: 'no',
    ND: 'no',
    MP: 'no',
    OH: 'no',
    OK: 'no',
    OR: 'no',
    PW: 'no',
    PA: 'no',
    PR: 'no',
    RI: 'no',
    SC: 'no',
    SD: 'yes',
    TN: 'no',
    TX: 'no',
    UT: 'no',
    VT: 'no',
    VI: 'no',
    VA: 'no',
    WA: 'no',
    WV: 'no',
    WI: 'no',
    WY: 'yes',
  };
}
