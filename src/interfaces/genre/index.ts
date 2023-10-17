import { GetQueryInterface } from 'interfaces';

export interface GenreInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface GenreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
