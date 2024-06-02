import { cookies } from "next/headers";
import { getToken } from "../utils/authHelper";
import { baseUrl } from "./cityApi";
import Cookies from 'js-cookie'


export async function cancleRoomBooking(orderId: number | undefined, user: {
    username: string | undefined;
    id: string | undefined;
    email: string | undefined;
}, otp: string) {

    const value = {
        orderId,
        user,
        otp
    }

    const jwtToken = Cookies.get('jwt')
    console.log("jwt token: ", jwtToken);
    

    const response = await fetch(`${baseUrl}/cancle-room-booking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('jwt')}`
        },
        body: JSON.stringify(value)
    })

    const status = await response.json()
    console.log("status: ", status);
    
    if(status.error && status.error.status === 401) {
        throw new Error('User should be logged in')
    }else if(status.error){
        throw new Error('Something went wrong')
    }
    return status
}

export async function sendMailForCancleBooking(razorpay_order_id: string, user: {
    username: string | undefined;
    id: string | undefined;
    email: string | undefined;
}) {
    const value = {
        razorpay_order_id,
        user
    }

    const response = await fetch(`${baseUrl}/sendmail-cancle-booking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('jwt')}`
        },
        body: JSON.stringify(value),
    })

    const status = await response.json()
    if(status.error && status.error.status === 401) {
        throw new Error('User should be logged in')
    }else if(status.error){
        throw new Error('Something went wrong')
    }
    return status
}

export async function getKey() {
    const url = `${baseUrl}/getKey`
    const response = await (await fetch(url, {
        method: 'GET'
    })).json()

    if(response.error){
        throw new Error('something went wrong')
    }
    return response
}