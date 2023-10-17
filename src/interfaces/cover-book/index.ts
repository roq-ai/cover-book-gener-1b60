import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CoverBookInterface {
  id?: string;
  title: string;
  author: string;
  publish_year: number;
  cover_book_genre: string;
  cover_book_language: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    review?: number;
  };
}

export interface CoverBookGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  author?: string;
  cover_book_genre?: string;
  cover_book_language?: string;
  user_id?: string;
  company_id?: string;
}
