import { CoverBookInterface } from 'interfaces/cover-book';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  cover_book?: CoverBookInterface[];
  user?: UserInterface;
  _count?: {
    cover_book?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
