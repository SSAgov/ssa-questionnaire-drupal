import { months } from '@/constants';
import {
  ELang,
  IAgeAndBday,
  ICalcFirstMOEResult,
  IDynamicExplanation,
  IMonthAndYearOfEnt,
} from '@/interfaces';
import { calcFirstMonthOfEntitlement } from '../apps/eligibility/stepsLogic/calculators';

// Different processors for template string variables
const processors = {
  monthAndYearOfEntitlement: getMonthAndYearOfEntitlement,
};

interface IParseExpProps extends IDynamicExplanation {
  ageAndBday: IAgeAndBday;
  lang: ELang;
}

// Parse the text from dynamic template string, replacing variables with generated values
export function parseDynamicExplanation(props: IParseExpProps): string {
  const { templateString, variables, processor } = props;
  let parsedText = templateString;
  // Obtain content that replaces variables in the string
  const dynamicContent = processors[processor](props);
  if (!dynamicContent) return parsedText;

  // Replace variable placeholders with generated values
  variables.forEach((variable) => {
    const variableHasContent = Object.keys(dynamicContent).includes(variable);
    if (variableHasContent) {
      const indexOfVar = parsedText.indexOf(`{{${variable}}}`);
      const lengthOfPlaceholder = variable.length + 4;
      const splitText = parsedText.split('');
      splitText.splice(
        indexOfVar,
        lengthOfPlaceholder,
        dynamicContent[variable],
      );
      const joinedText = splitText.join('');
      parsedText = joinedText;
    }
  });

  return parsedText;
}

// Resolve a number month or the actual month name
function getMonthAndYearOfEntitlement({
  ageAndBday,
  lang,
}: IParseExpProps): IMonthAndYearOfEnt | undefined {
  const monthYear: ICalcFirstMOEResult | undefined =
    calcFirstMonthOfEntitlement(ageAndBday.birthdate);
  if (!monthYear || !monthYear.month || !monthYear.year) return undefined;
  const { month, year } = monthYear;

  return {
    month: lang === ELang.es ? months[lang][month - 1].toLowerCase() : months[lang][month - 1],
    year,
  };
}
