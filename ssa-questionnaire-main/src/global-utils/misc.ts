import { useGlobalStyles } from '@/constants';
import { IPersists, IResultComplete } from '@/interfaces';
import { nonDrupalStyles } from './nonDrupalStyles';

export function capitalize(txt: string): string {
  return txt.replace(/^\w/, (c) => c.toUpperCase());
}

const parse = (val: string | undefined | null): IPersists => {
  if (!val) return { age: 0, results: [] } as IPersists;
  const ret = JSON.parse(val);
  return ret as IPersists;
};

// const getCookieName = (cookieName: string) => kebabCase(cookieName.trim().toLowerCase());
const getCookieName = (cookieName: string) => 'ssa-eligibility';

const get = (cookieName: string) => {
  let ret = { age: 0, results: [] } as IPersists;
  const cName = getCookieName(cookieName);
  try {
    const cookieVal = document.cookie
      .split('; ')
      ?.find((row: string) => row.startsWith(`${cName}=`))
      ?.split('=')[1];
    ret = parse(cookieVal);
  } catch (e) {
    console.log(e);
  }
  return ret;
};

const set = (cookieName: string, cook: IPersists) => {
  const cName = getCookieName(cookieName);
  try {
    document.cookie = `${cName}=${JSON.stringify(cook)}; path=/;`;
  } catch (e) {
    console.log(e);
  }
};

export const setAge = (age: number): void => {
  const cook = get('ssa-eligibility');
  cook.age = age;
  set('ssa-eligibility', cook);
};

export const setBranch = (branch: string): void => {
  const cook = get('ssa-eligibility');
  cook.branch = branch;
  set('ssa-eligibility', cook);
};

export const setBranchAndAge = (branch: string, age: number): void => {
  const cook = get('ssa-eligibility');
  cook.branch = branch;
  cook.age = age;
  set('ssa-eligibility', cook);
};

export const setResults = (results: IResultComplete[]): void => {
  const cook = get('ssa-eligibility');
  cook.results = results;
  set('ssa-eligibility', cook);
};

export function handleGlobalStyles(): void {
  if (useGlobalStyles) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    style.appendChild(document.createTextNode(nonDrupalStyles));
  }
}

export function replaceDynamicVariable(
  variable: string,
  text: string,
  replacementValue: string,
) {
  const indexOfVar = text.indexOf(`{{${variable}}}`);
  const lengthOfPlaceholder = variable.length + 4;
  const splitText = text.split('');
  splitText.splice(indexOfVar, lengthOfPlaceholder, replacementValue);
  return splitText.join('');
}
