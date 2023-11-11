import { loginRequest } from "./externalServices.mjs";
import { alertMessage, getLocalStorage, setLocalStorage } from "./utils.mjs";
import jwt_decode from "jwt-decode";

const tokenKey = "so-token";

export async function login(creds, redirect = "/"){
    try {
        const token = await loginRequest(creds);
        setLocalStorage(tokenKey, token);
        window.location = redirect;
    } catch (err) {
        alertMessage(err.message.message);
    }
};

export function checkLogin(){
    const token = getLocalStorage(tokenKey);
    const valid = isTokenValid(token);
    if(!valid) {
        localStorage.removeItem(tokenKey);
        const location = window.location;
        console.log(location);
        window.location = `/login.index.html?redirect=${location.pathname}`;
    }
    else{
       return token; 
    }
}

// is responsible for checking an existing token to make sure it is not expired. 
// It should return a true or false, true if the token is still valid (unexpired), false if it is expired.

// How do we know if the token is expired? 

function isTokenValid(token){
    if(token) {
        const decoded = jwt_decode(token);
        const currentDate = new Date();
        if(decoded.exp * 1000 < currentDate.getTime()) {
            console.log("Token Expired");
            return false;
        } else {
            console.log("Valid Token")
            return true;
        }
    } else return false;
}
