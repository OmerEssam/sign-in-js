var overLay = document.querySelector(".overlay");
var userNameAdd = document.getElementById("useracc")
var userEmailAdd = document.querySelector("#useremail")
var userPassAdd = document.querySelector("#user-number")
var emailEnter = document.querySelector(".emailEnter")
var emailPass = document.querySelector(".passEnter")
var eyes =  document.querySelector(".eye-show")
var validName = /^[A-Za-z]+/
var valiEmail =  /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/
var validPhoneNum= /^(01)[0125][0-9]{8}$/
var validPass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
var makhsn = [];
document.querySelector(".exit").addEventListener("click", closeSignUp);
document.querySelector(".b-signin").addEventListener("click" , openSignUp)
// sign up account
document.querySelector(".b-signup").addEventListener("click" , function(){
    if(userNameAdd.value.match(validName) && (userEmailAdd.value.match(valiEmail) || userEmailAdd.value.match(validPhoneNum)) && userPassAdd.value.match(validPass)){
        //add
    var userData = {
        userName:userNameAdd.value,
        userEmail:userEmailAdd.value,
        userPass:userPassAdd.value
    }
    makhsn.push(userData)
    //clear 
    userNameAdd.value="";
    userEmailAdd.value="";
    userPassAdd.value="";
    // local storge
    localStorage.setItem("Data" , JSON.stringify(makhsn));
    overLay.classList.replace("d-flex", "d-none")
    }else{
        userNameAdd.classList.replace("inputRight" , "inputerror")
        userEmailAdd.classList.replace("inputRight" , "inputerror")
        userPassAdd.classList.replace("inputRight" , "inputerror")
    }
    
})

// open sign up
function openSignUp(){
    overLay.classList.replace("d-none", "d-flex")
}
// close sign up
function closeSignUp(){
    overLay.classList.replace("d-flex", "d-none")
}

document.querySelector(".b-login").addEventListener("click" , function(){
   var dataFromLocal = JSON.parse(localStorage.getItem("Data"));
   for(var i = 0 ; i < dataFromLocal.length ; i++ ){
    // dataFromLocal[i].userEmail  
    // console.log(emailEnter.value );
    if(emailEnter.value == dataFromLocal[i].userEmail && emailPass.value == dataFromLocal[i].userPass  ){
        location.href="https://www.facebook.com/"
    }else{
        emailEnter.classList.replace("inputSign" , "inputerror")
        emailPass.classList.replace("inputSign" , "inputerror")
        document.querySelector(".erorr-send").innerHTML="incorrect email or password"
    }
}
   
} )
document.querySelector(".eye").addEventListener("click" , function(){
if(emailPass.type == "password"){
        emailPass.type = "text"
        eyes.classList.replace("fa-eye" , "fa-eye-slash")
    }else if (emailPass.type == "text"){
        emailPass.type = "password"
        eyes.classList.replace("fa-eye-slash" , "fa-eye")
    }
})