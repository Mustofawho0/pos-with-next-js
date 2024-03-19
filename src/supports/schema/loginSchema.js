import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is Required'),
    password: Yup.string().required('Password is Required')
})