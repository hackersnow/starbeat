
let likeValue = document.querySelector(".likeValue").innerHTML;

  function likeHandler(){
    likeValue++
    console.log(likeValue);
    document.querySelector(".likeValue").innerHTML=likeValue;
  }



  let inputReply = document.querySelector(".comm_box");

 function replybtn(){
    inputReply.classList.toggle("activeReply");
  }

  