//  will be responsible for sending the credentials to the authentication 
// server and if that comes back successful it will store the authentication 
// token that is sent back into local storage. 
// Then we will redirect the user to whatever page they were trying to access when they were asked to login.
function login(creds, redirect){
    return
}


//is responsible to check to see if the user is already logged in. 
// How will we do that? We will check to see if there is a valid token stored 
// in localStorage. If there is no token, or if the token is expired we should redirect 
// the user to the login page...making sure to keep track of the page they were trying to access 
// so we can send them back after the login!
function checkLogin(){
    return
}

// is responsible for checking an existing token to make sure it is not expired. 
// It should return a true or false, true if the token is still valid (unexpired), false if it is expired.

function isTokenValid(){
    return
}
