
import { booking } from "../Schema"
import { getToken } from "../utils/authHelper"
import axios from "axios";
import { baseUrl } from "./cityApi";
import Cookies from "js-cookie"

type registerModal = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

type loginModal = {
  identifier: string;
  password: string;
};

export async function registerUser(value: registerModal) {
  const response = await fetch(`${baseUrl}/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  const register = await response.json();
    if(register.error){
        throw new Error('something went wrong')
    }
  return register;
}

export async function loginUser(value: loginModal) {
  const response = await fetch(`${baseUrl}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  const login = await response.json();
if(login.error) {
        throw new Error('something went wrong')
    }
  return login;
}

export async function handleContactForm(value: string) {
  const body = {
    email: value,
  };
  const response = await fetch(`${baseUrl}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const contactInfo = await response.json();

  return contactInfo;
}

export async function handleCallForm(value: string) {
  const body = {
    email: value,
  };
  const response = await fetch(`${baseUrl}/join_us`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const callInfo = await response.json();

  return callInfo;
}

export async function handleForgot(value: string) {
  const {email} = {
    email: value,
  };

  const response = await axios
      .post('http://localhost:1337/api/auth/forgot-password', {
        email: email,
      })
  return response.data;
}

export async function getMe() {
    const response = await fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
    const user = await response.json();
    if(user.error.status === 401) {
        throw new Error('User should be logged in')
    }else if(user.error){
        throw new Error('Something went wrong')
    }
    return user
}

export async function getAllOrders(username: string) {
    const url = `${baseUrl}/orders/${username}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    const booking_data = await (response.json())

    if(booking_data.error !== undefined){
        return {
            allBooking: [],
            pagination: {
                page: 0,
                pageSize:  0,
                pageCount: 0,
                total: 0
            },
            error: booking_data.error
        }
    }

    const booking: booking[] = booking_data.data.attributes.results.map((booking: any): booking => {
        return {
            ...booking,
            hotel: {
                ...booking.hotel,
                thumbnail: booking.hotel.thumbnail.url,
            },
        }
    })

    return {
        allBooking: booking,
        pagination: booking_data.data.attributes.pagination
    }
}

export async function handleForgotForm(value:{
  email:string,
  password:string,
  confirm_password:string
}, code: string | undefined){

  const response = await axios
  .post('http://localhost:1337/api/auth/reset-password', {
    code: code,
    password: value.password,
    passwordConfirmation: value.confirm_password,
  })

  return response.data
}
