import * as yup from 'yup';

export const languageValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
});
