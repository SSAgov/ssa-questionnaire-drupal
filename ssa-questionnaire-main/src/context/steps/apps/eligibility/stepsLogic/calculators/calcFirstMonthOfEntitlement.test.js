import { assert, describe, expect, test } from 'vitest';
import { calcFirstMonthOfEntitlement } from './calcFirstMonthOfEntitlement';

describe('Dynamic Explanation', () => {
  // {"age":{"days":13,"months":6,"years":58},"birthdate":"01/01/1964"}
  test('DOB is 05/31/1935', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '05/31/1935' })).toStrictEqual({ month: 6, year: 1997 });
  });
  test('DOB is 06/01/1935', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '06/01/1935' })).toStrictEqual({ month: 6, year: 1997 });
  });
  test('DOB is 06/02/1935', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '06/02/1935' })).toStrictEqual({ month: 6, year: 1997 });
  });
  test('DOB is 06/03/1935', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '06/03/1935' })).toStrictEqual({ month: 7, year: 1997 });
  });
  test('DOB is 12/31/1935', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '12/31/1935' })).toStrictEqual({ month: 1, year: 1998 });
  });
  test('DOB is 01/01/1936', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '01/01/1936' })).toStrictEqual({ month: 1, year: 1998 });
  });
  test('DOB is 01/02/1936', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '01/02/1936' })).toStrictEqual({ month: 1, year: 1998 });
  });
  test('DOB is 01/03/1936', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '01/03/1936' })).toStrictEqual({ month: 2, year: 1998 });
  });
  test('DOB is 12/31/1937', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '12/31/1937' })).toStrictEqual({ month: 1, year: 2000 });
  });
  test('DOB is 01/01/1938', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '01/01/1938' })).toStrictEqual({ month: 1, year: 2000 });
  });
  test('DOB is 01/02/1938', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '01/02/1938' })).toStrictEqual({ month: 1, year: 2000 });
  });
  test('DOB is 01/03/1938', () => {
    expect(calcFirstMonthOfEntitlement({ birthdate: '01/03/1938' })).toStrictEqual({ month: 2, year: 2000 });
  });
});
