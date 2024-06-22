
import { booking } from "../Schema"
import { getToken } from "../utils/authHelper"
import Cookies from 'js-cookie';
import axios from "axios";
import { baseUrl } from "./cityApi";

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

export async function handleCallForm(value: {email: string, name: string, phone: string}) {
  const body = {
    email: value.email,
    name: value.name,
    phone: value.phone
  };
  const response = await fetch(`${baseUrl}/join-us`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const callInfo = await response.json();
  console.log("callInfo", callInfo);
  
  return callInfo;
}

export async function handleForgot(value: string) {
  const {email} = {
    email: value,
  };

  const response = await axios
      .post(`${baseUrl}/auth/forgot-password`, {
        email: email,
      })
  return response.data;
}

export async function getMe() {
    const response = await fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('jwt')}`
        }
    })
    
    const user = await response.json();
    return user
}


export async function handleForgotForm(value:{
  password:string,
  confirm_password:string
}, code: string | undefined){
  
  const response = await axios
  .post(`${baseUrl}/auth/reset-password`, {
    code: code,
    password: value.password,
    passwordConfirmation: value.confirm_password,
  })
  
  return response.data
}

export async function  updateUser(id: string, values: {
  fullName: string, phoneNumber: string, address: string
}) {
  try {
    const response = await fetch(`${baseUrl}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify(values)
    })
  
    const result = await  response.json()
    return result
  } catch (error) {
    if(error instanceof Error){
      throw error
    }
  }
}



