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


// export async function handleDeleteUser(value:"faisal@gmail.com"){
//   const body = {
//     email:value
//   };
//   const { email } = body;
//     const response = await fetch(`${baseUrl}/${value}`,{
//     method: "DELETE",
//     headers: {
//       "content-type":"application/json",
//     },
//     // body:JSON.stringify('deleted success')
//   })
//   const data = await response.json();
//   console.log(data);
//   return data;
// }


import axios from "axios";

// Request API.
// Add your own code here to customize or restrict how the public can register new users.
export async function handleForget() {
    // Request API.
    axios
      .post('http://localhost:1337/api/auth/forgot-password', {
        email: 'user@strapi.io', // user's email
      })
      .then(response => {
        console.log('Your user received an email');
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
}
