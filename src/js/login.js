import { loadHeaderFooter, getParam } from "./utils.mjs";
import { login } from "auth.mjs";

loadHeaderFooter();

const redirect = getParam("redirect");

document.querySelector("#loginSubmit").addEventListener("click", (e) =>{
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-pass").value;
    login({email, password}, redirect);
});
