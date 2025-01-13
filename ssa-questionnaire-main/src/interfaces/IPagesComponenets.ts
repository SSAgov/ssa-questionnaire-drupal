export enum ECategory {
  retirement = 'retirement',
  disability = 'disability',
  family = 'family',
  supplemental_security_income = 'supplemental_security_income',
  survivor = 'survivor',
  myssa = 'myssa',
  ossnap = 'ossnap',
  office_visit = 'office_visit',
  call = 'call'
}

export interface IPageMap {
  [pageName: string]: JSX.Element
}