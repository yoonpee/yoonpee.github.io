const form = document.querySelector('#form');
const user = document.querySelector('#username');
const pw = document.querySelector('#password');
const pw2 = document.querySelector('#password2');
const email = document.querySelector('#email');
/* showerror, success, valid */ 
function showError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('.small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function showSuccess(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('.small');
    formControl.className = 'form-control success';
}
function showValid(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('.small');
    formControl.className = 'form-control valid';
    small.innerText = message;
}
/* email valid */
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/* check inputs */ 
function checkInputs(){
    const userValue = user.value.trim();
    const pwValue = pw.value.trim();
    const pw2Value = pw2.value.trim();
    const emailValue = email.value.trim();

    if(userValue === ''){
        showError(user, "Please enter a correct username")
    }else{
        showSuccess(user)
    }
    if(pwValue === ''){
        showError(pw, "Please enter a correct password")
    }else{
        showSuccess(pw)
    }
    if(pw2Value === ''){
        showError(pw2, "Please enter a correct password")
    }else if(pw2Value !== pwValue){
       showValid(pw2, "Passwords does not match") 
    } 
    
    else{
        showSuccess(pw2)
    }
   
    if(emailValue === ''){
        showError(email, "Please enter a correct email")
    }else if(!isEmail(emailValue)){
        showValid(email, "Please enter a valid email")
    }
    else{
        showSuccess(email)
    }
}


form.addEventListener("submit", (e)=>{
   e.preventDefault();
   checkInputs();
})