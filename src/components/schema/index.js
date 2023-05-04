import * as Yup from 'yup';

export const loginModalSchema = Yup.object({
    phoneNumber : Yup.number().min(6).max(12).required("Please enter your phone number"),
    otp:Yup.number().min(4).max(4).required("please enter a valid Otp"),
})