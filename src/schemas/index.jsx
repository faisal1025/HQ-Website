import * as Yup from 'yup'
import YupPassword from 'yup-password'

YupPassword(Yup)


export const signInSchema = Yup.object({
    identifier: Yup.string().email().required('Please enter valid email'),
    password: Yup.string().min(8).required("please enter your password")
})

export const signUpSchema = Yup.object({
    username: Yup.string().required('Please enter a username'), 
    email: Yup.string().email().required('Please enter valid email'),
    phoneNumber: Yup.string().required('Please enter phone number'),
    password: Yup.string().password().required("please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password')],"must match")
})

export const resetSchema = Yup.object().shape({
    password: Yup.string().password().required("please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password')],"must match")
})