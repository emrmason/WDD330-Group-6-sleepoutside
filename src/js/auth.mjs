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

function checkLogin(tokenKey){
    if(tokenKey) {
        jwt_decode();
        const date = new Date();
        
    }
    return
}

// is responsible for checking an existing token to make sure it is not expired. 
// It should return a true or false, true if the token is still valid (unexpired), false if it is expired.

function isTokenValid(){
    return
}
