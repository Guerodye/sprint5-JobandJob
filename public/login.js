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
    if(username.value.length <= 6){
        error1.push('Username must have more than 6 characters');
    }
    if (password.value.length <= 8){
        error2.push('Password must have more than 8 characters');
    }
    //message.innerText = error;//

    else{
        window.location.href="index.html";
    }
    usernameError.innerText = error1;
    passwordError.innerText = error2;

})
