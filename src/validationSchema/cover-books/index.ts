import * as yup from 'yup';

export const coverBookValidationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  publish_year: yup.number().integer().required(),
  cover_book_genre: yup.string().required(),
  cover_book_language: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
