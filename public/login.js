const form = document.getElementById("form")
const username = document.getElementById("username")
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
