let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");

let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");

let com_mob=document.getElementById("texmob");
let form=document.querySelector("form");

function validateInput(){
    //check username is empty 

    var vle= email.value.trim();
    let patt = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;  
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{

        if( patt.test(vle) ){
            onSuccess(email,"");
        }else{
            onError(email,"Email is not valid");
            console.log(vle);
           
        }
    }

    //password
    if(pwd.value.trim()===""){
        onError(pwd,"password cannot be empty");
     }else{
         onSuccess(pwd);
     }
     if(conPwd.value.trim()===""){
        onError(conPwd,"Confirm Password cannot be empty");
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm password not matching");
         }
         else
         onSuccess(conPwd);
     }


     if(com_mob.value.trim()===""){
        onError(com_mob,"Mobile cannot be empty");
    }else{
        if((com_mob.value.charAt(0) != 9) && (com_mob.value.charAt(0) != 8) && (com_mob.value.charAt(0) != 7)){
            onError(com_mob,"Mobile number must start with 9, 8 and 7");
        }else{
            onSuccess(com_mob);
        }
    }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  

    window.location.href="star-verify_mob.html";
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

// function isValidEmail(email){
//    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }


$('body').on('keyup', '#texmob', function () {
    var $input = $(this),
        value = $input.val(),
        length = value.length,
        inputCharacter = parseInt(value.slice(-1));

    if (!((length > 0 && inputCharacter >= 0 && inputCharacter <= 10) || (length === 1 && inputCharacter >= 7 && inputCharacter <= 10))) {
        $input.val(value.substring(0, length - 1));
     }
  });





let pass2 = document.getElementById("txtPwd");
let eye1 = document.querySelector("#eye1");




  function hide_btn1(){
     if ( pass2.type === "password"){
        pass2.setAttribute("type","text");

        eye1.setAttribute("class","fa fa-eye-slash");
     
  }else{
    pass2.setAttribute("type","password");
    eye1.setAttribute("class","fa fa-eye");
  }
  }



  let pass1 = document.getElementById("txtConPwd");
let eye2 = document.querySelector("#eye2");




  function hide_btn(){
     if ( pass1.type === "password"){
        pass1.setAttribute("type","text");

        eye2.setAttribute("class","fa fa-eye-slash");
     
  }else{
    pass1.setAttribute("type","password");
    eye2.setAttribute("class","fa fa-eye");
  }
  }


  