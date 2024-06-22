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
    password: Yup.string().password().required("please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password')],"must match")
})

export const resetSchema = Yup.object().shape({
    password: Yup.string().password().required("please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password')],"must match")
})

export const makeBookingForm = Yup.object().shape({
    fullName: Yup.string().required('Please enter your full name'),
    phoneNumber: Yup.string().max(10, "Maximum digits should be 10").min(10, 'Minimum digits should be 10').required('Please enter phone number'),
    address: Yup.string().min(6, 'Please enter atleast 6 character').required('Please enter your full address including city and state')
})