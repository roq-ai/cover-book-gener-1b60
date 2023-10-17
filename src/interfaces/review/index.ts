import { UserInterface } from 'interfaces/user';
import { CoverBookInterface } from 'interfaces/cover-book';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment: string;
  user_id: string;
  cover_book_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  cover_book?: CoverBookInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  cover_book_id?: string;
}
