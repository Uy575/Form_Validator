const btn = document.getElementById("submit");
const message = document.getElementById("message");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const form = document.getElementById("form");

let isValid = false;
let pass = false;

function storeData(){
   const  userData = {
    name: form.name.value,
    phone: form.phoneno.value,
    Email: form.emailaddress.value,
    webiste: form.websiteurl.value,
    password: form.password1.value,
   };
   console.log(userData);
     
}

function validate(){ 
  isValid = form.checkValidity();
  if(!isValid){
      message.textContent = " Please fill out all fields";
      message.style.color = "red";
      message.style.fontSize = "1.5rem";
      message.style.paddingTop = "0.7rem";
      message.style.height = "4rem";
    }

    if(password.value === confirmPassword.value){
        pass = true;
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";

    }
    else{
    pass = false 
    message.textContent = " password does not matched";
    message.style.color = "red";
    message.style.fontSize = "1.5rem";
    message.style.paddingTop = "0.7rem";
    message.style.height = "4rem";
    }

    if(isValid && pass){
        message.textContent = "Registered";
        message.style.color = "green";
        message.style.fontSize = "1.5rem";
        message.style.paddingTop = "0.7rem";
        message.style.height = "4rem";

        storeData();

    }
}

function validation(e){
    e.preventDefault();
     validate();


}
form.addEventListener("submit",validation)