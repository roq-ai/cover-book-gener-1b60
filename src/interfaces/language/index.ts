import { GetQueryInterface } from 'interfaces';

export interface LanguageInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LanguageGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
