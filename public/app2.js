const formSignIn = document.getElementById("form-sign-in")
//const message = document.getElementById("message")
const newUsernameError = document.getElementById("new-username-error")
const newPasswordError = document.getElementById("new-password-error")
//let signInInfo=[];
let inputs =[{
    username: document.getElementById("username").value,

    password: document.getElementById("password").value

}]

formSignIn.addEventListener('submit', signUp);



function signUp(e) {
    e.preventDefault();// prevent auto submission
    //alert('Form is submitted');
    let error1 = [];
    let error2 = [];
    //let signInInfo=[];

    if (username.value.length <= 6) {
        error1.push('Username must have more than 6 characters');
    }
    if (password.value.length <= 8) {
        error2.push('Password must have more than 8 characters');
    }

    else {


        //signInInfo.push(inputs);
       console.log(inputs);
        window.location.href = "index.html";
        formSignIn.reset();


        //window.location.href="index.html";
    }
    newUsernameError.innerText = error1;
    newPasswordError.innerText = error2;

}
//Working on a different way to make the sign-in and login interact
// const formLogin = document.getElementById("form-login");
// const loginUsername = document.getElementById("login-username").value;
// const loginPassword = document.getElementById("login-password").value;
// //
// //
//  formLogin.addEventListener('submit',login)
//  function login(e){
//      e.preventDefault();
//         if(loginUsername == inputs.username && loginPassword == inputs.password) {
//             console.log(username + ' is logged in!!!')
//             // stop the statement if result is found true - this was a return in the video, break is best practice here
//         } else {
//             // error if username and password don't match
//             console.log('incorrect username or password')
//         }
//    }

const formLogin = document.getElementById("form-login");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password")
//const message = document.getElementById("message")
const loginUsernameError = document.getElementById("login-username-error")
const loginPasswordError = document.getElementById("login-password-error")




formLogin.addEventListener('submit',login);
function login(e){
    e.preventDefault();// prevent auto submission
    //alert('Form is submitted');
    let errorLogin1= [];
    let errorLogin2=[];
    if(loginUsername.value.length <= 6){
        errorLogin1.push('Enter your username');
    }
    if (loginPassword.value.length <= 8){
        errorLogin2.push('Enter your password');
    }
    //message.innerText = error;//

    else{

        window.location.href="index.html";
    }
    loginUsernameError.innerText = errorLogin1;
    loginPasswordError.innerText = errorLogin2;

}





