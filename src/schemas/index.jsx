import * as Yup from 'yup'


export const signInSchema = Yup.object({
    email: Yup.string().email().required('Please enter valid email'),
    password: Yup.string().min(6).required("please enter your password")
})

export const signUpSchema = Yup.object({
    email: Yup.string().email().required('Please enter valid email'),
    password: Yup.string().min(6).required("please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password')],"must match")
})