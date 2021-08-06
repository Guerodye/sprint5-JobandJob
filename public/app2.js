
const formSignIn = document.getElementById("form-sign-in")
//const message = document.getElementById("message")
const newUsernameError = document.getElementById("new-username-error")
const newPasswordError = document.getElementById("new-password-error")




formSignIn.addEventListener('submit',signUp)
    function signUp(e){
    e.preventDefault();// prevent auto submission
    //alert('Form is submitted');
    let error1= [];
    let error2=[];
    let signInInfo=[];
    if(newUsername.value.length <= 6){
        error1.push('Username must have more than 6 characters');
    }
    if (newPassword.value.length <= 8){
        error2.push('Password must have more than 8 characters');
    }
    //message.innerText = error;//

    else{
         let inputs= {
             newUsername : document.getElementById("new-username").value,
             newPassword : document.getElementById("new-password").value
         }
         signInInfo.push(inputs);
         console.log(signInInfo);
        window.location.href="loginin.html";

        //formSignIn.reset();




        //window.location.href="index.html";
    }
    newUsernameError.innerText = error1;
    newPasswordError.innerText = error2;

}

const form = document.getElementById("form-login");
const username = document.getElementById("username");
const password = document.getElementById("password")
//const message = document.getElementById("message")
const usernameError = document.getElementById("usernameerror")
const passwordError = document.getElementById("passworderror")




form.addEventListener('submit',function (e){
    e.preventDefault();// prevent auto submission
    //alert('Form is submitted');
    let error1= [];
    let error2=[];
    if(username.value.length = 0){
        error1.push('Enter your username');
    }
    if (password.value.length = 0){
        error2.push('Enter your password');
    }
    //message.innerText = error;//

    else{
        window.location.href="index.html";
    }
    usernameError.innerText = error1;
    passwordError.innerText = error2;

})



