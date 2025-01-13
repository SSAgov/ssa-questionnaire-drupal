export interface ISelf {
  href: string;
}

export interface ILinks {
  self: ISelf;
}

export interface IMeta {
  links: ILinks;
}

export interface IJsonApi {
  version: string;
  meta: IMeta;
}

export interface IAttrAnswer {
  id: number;
  title: string;
}

export interface IAttributes {
  drupal_internal__qid: number;
  status: boolean;
  question_id: string;
  title: string;
  answers: IAttrAnswer[];
  subTitle: null | string;
  info: string;
  created: string;
  changed: string;
  moderation_state: string;
  content_translation_source: string;
  content_translation_outdated: boolean;
  content_translation_status: boolean;
}

export interface IUid {
  data: null | any;
  links: ILinks;
}

export interface IRelationships {
  uid: IUid;
}

export interface IDataItem {
  type: string;
  id: string;
  links: ILinks;
  attributes: IAttributes;
  relationships: IRelationships;
}

export interface IDrupalResponse {
  jsonapi: IJsonApi;
  data: IDataItem[];
  links: ILinks;
}

export interface IEligibilityQuestionsResponse extends IDrupalResponse {}
