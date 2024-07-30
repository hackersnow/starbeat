$(document).ready(function () {
  $(".profile_container").click(function () {
    $(".pro_drop_down").toggleClass("drop_down");
  });

  $(".pro_drop_down").click(function () {
    $(".pro_drop_down").toggleClass("drop_down");
  });
  $(".menu_icons").click(function () {
    $(".des_left").toggleClass("des_left_menu");
    console.log("rhahul chor he");
  });

  $(".col_menu").click(function () {
    $(".des_left").removeClass("des_left_menu");
  });

  $(".clogs_ds").click(function () {
    $(".des_left").removeClass("des_left_menu");
  });

  $(".btns-ss2").click(function () {
    $(".btns-sdd").toggleClass("drop_down2");
  });

  $(".btns-sdd").click(function () {
    $(".btns-sdd").toggleClass("drop_down2");
  });

  // $("activ_vc").click(function () {
  //     $('body').removeClass("activ_vc");
  //     $('.btns-sdd').removeClass("drop_down2");
  //     console.log("hell0");

  // });

  $(".bd_ds_serrch").click(function () {
    $(".ser_bar").toggleClass("ser_bar_23");
  });

  $(".ball_head_44").click(function () {
    $(".notfication_icon_bx").toggleClass("notfication_iconxdd");
  });

  // model 1
  $(".btn_video_mod_u").click(function () {
    $(".bold_mod").toggleClass("bold_mod_20");
  });

  $(".overLa , .cloasd , .cancel_cloasd").click(function () {
    $(".bold_mod").removeClass("bold_mod_20");
  });

  // model 2
  $(".btn_video_mod_u_r").click(function () {
    $(".bold_mod_2_ur").toggleClass("bold_mod_20_ur");
  });

  $(".overLa_ur , .cloasd2 ,.cancel_cloasd2").click(function () {
    $(".bold_mod_2_ur").removeClass("bold_mod_20_ur");
  });

  // model 1
  $(".au_btns_up").click(function () {
    $(".bold_mod").toggleClass("bold_mod_20");
  });

  $(".overLa , .cloasd").click(function () {
    $(".bold_mod").removeClass("bold_mod_20");
  });

  // model 2
  $(".au_btns_up_link").click(function () {
    $(".bold_mod_2_ur").toggleClass("bold_mod_20_ur");
  });

  $(".overLa_ur , .cloasd2").click(function () {
    $(".bold_mod_2_ur").removeClass("bold_mod_20_ur");
  });

  // model 1
  $(".creat_pole-btn").click(function () {
    $(".bold_mod").toggleClass("bold_mod_20");
  });

  $(".overLa , .cloasd").click(function () {
    $(".bold_mod").removeClass("bold_mod_20");
  });

  // model 1
  $(".add_event_btn").click(function () {
    $(".bold_mod").toggleClass("bold_mod_20");
  });

  $(".overLa , .cloasd").click(function () {
    $(".bold_mod").removeClass("bold_mod_20");
  });

  $(".Next_pre").click(function () {
    $(".slider_box1").find(".activ_img.activ_box").next().addClass("activ_box");
    $(".slider_box1")
      .find(".activ_img.activ_box")
      .prev()
      .removeClass("activ_box");
  });

  $(".Pre_vis").click(function () {
    $(".slider_box1").find(".activ_img.activ_box").prev().addClass("activ_box");
    $(".slider_box1")
      .find(".activ_img.activ_box")
      .next()
      .removeClass("activ_box");
  });

  $("#text-edio").click(function () {
    $(".iboxd1").removeClass("active_redi");
    $(".iboxd2").addClass("active_redi");
  });

  $("#img-edio").click(function () {
    $(".iboxd2").removeClass("active_redi");
    $(".iboxd1").addClass("active_redi");
  });

  $("#btn_per1").click(function () {
    $("#tab_pro2").removeClass("proTabActiv");

    $("#btn_per2").removeClass("activ_btn");
    $("#btn_per1").addClass("activ_btn");

    $("#tab_pro1").addClass("proTabActiv");
  });

  $("#btn_per2").click(function () {
    $("#tab_pro1").removeClass("proTabActiv");

    $("#btn_per1").removeClass("activ_btn");
    $("#btn_per2").addClass("activ_btn");

    $("#tab_pro2").addClass("proTabActiv");
  });

  $("#btn_per12").click(function () {
    $("#tab_pro22").removeClass("proTabActiv");

    $("#btn_per22").removeClass("activ_btn");
    $("#btn_per12").addClass("activ_btn");

    $("#tab_pro12").addClass("proTabActiv");
  });

  $("#btn_per22").click(function () {
    $("#tab_pro12").removeClass("proTabActiv");

    $("#btn_per12").removeClass("activ_btn");
    $("#btn_per22").addClass("activ_btn");

    $("#tab_pro22").addClass("proTabActiv");
  });

  // $(".ac_card_1").click(function () {

  //     $('.pro_card_flow2').removeClass("card_dbox_d_activ");
  //     $('.pro_card_flow3').removeClass("card_dbox_d_activ");
  //     $('.pro_card_flow4').removeClass("card_dbox_d_activ");
  //     $('.pro_card_flow5').removeClass("card_dbox_d_activ");

  //     $('.pro_card_flow1').addClass("card_dbox_d_activ");

  // });

  $(".ac_card_2").click(function () {
    $(".pro_card_flow1").removeClass("card_dbox_d_activ");
    $(".pro_card_flow3").removeClass("card_dbox_d_activ");
    $(".pro_card_flow4").removeClass("card_dbox_d_activ");
    $(".pro_card_flow5").removeClass("card_dbox_d_activ");

    $(".pro_card_flow2").addClass("card_dbox_d_activ");
  });

  $(".ac_card_3").click(function () {
    $(".pro_card_flow1").removeClass("card_dbox_d_activ");
    $(".pro_card_flow2").removeClass("card_dbox_d_activ");
    $(".pro_card_flow4").removeClass("card_dbox_d_activ");
    $(".pro_card_flow5").removeClass("card_dbox_d_activ");

    $(".pro_card_flow3").addClass("card_dbox_d_activ");
  });

  $(".ac_card_4").click(function () {
    $(".pro_card_flow1").removeClass("card_dbox_d_activ");
    $(".pro_card_flow2").removeClass("card_dbox_d_activ");
    $(".pro_card_flow3").removeClass("card_dbox_d_activ");
    $(".pro_card_flow5").removeClass("card_dbox_d_activ");

    $(".pro_card_flow4").addClass("card_dbox_d_activ");
  });







  $("#perkActiv1").click(function () {
    $("#tab1_bx2").removeClass("proTabActiv1");

    $("#perkActiv2").removeClass("act_bxx_x");
    $("#perkActiv1").addClass("act_bxx_x");

    $("#tab1_bx1").addClass("proTabActiv1");
  });


  
  $("#perkActiv2").click(function () {
    $("#tab1_bx1").removeClass("proTabActiv1");

    $("#perkActiv1").removeClass("act_bxx_x");
    $("#perkActiv2").addClass("act_bxx_x");

    $("#tab1_bx2").addClass("proTabActiv1");
  });





  $("#bt_per_act1").click(function () {
    $("#activ_er_p2").removeClass("proTabActiv1");

    $("#bt_per_act2").removeClass("active_b");
    $("#bt_per_act1").addClass("active_b");

    $("#activ_er_p1").addClass("proTabActiv1");
  });


  $("#bt_per_act2").click(function () {
    $("#activ_er_p1").removeClass("proTabActiv1");

    $("#bt_per_act1").removeClass("active_b");
    $("#bt_per_act2").addClass("active_b");

    $("#activ_er_p2").addClass("proTabActiv1");
  });


  $("#bt_pb_p").click(function () {

  $(".box_chating_1").addClass("actibar_1");
})

$(".btn_2px").click(function () {

  $(".box_chating_1").removeClass("actibar_1");
})

$(".box_bes_n").click(function () {

  $(".box_chating_3").addClass("actibar_2");
})

$("#btPdnt").click(function () {

  $(".boxdtsx").toggleClass("actiba_search_br");
})

$(".btn_close_plu").click(function () {

  $(".boxdtsx").removeClass("actiba_search_br");
})




$(".btn_bx_3").click(function () {

  $(".box_chating_3").removeClass("actibar_2");
})


  // $(".ac_card_5").click(function () {

  //     $('.pro_card_flow1').removeClass("card_dbox_d_activ");
  //     $('.pro_card_flow2').removeClass("card_dbox_d_activ");
  //     $('.pro_card_flow3').removeClass("card_dbox_d_activ");
  //     $('.pro_card_flow4').removeClass("card_dbox_d_activ");

  //     $('.pro_card_flow5').addClass("card_dbox_d_activ");

  // });

  $(".btn_vc_kyc_bt1, .btn_c_activx1").click(function () {
    $(".cont_kyc_2 ").removeClass("cont_kyc_Activc");
    $(".cont_kyc_3 ").removeClass("cont_kyc_Activc");
    $(".btn_vc_kyc_bt2").removeClass(" activ_kyc");
    $(".btn_vc_kyc_bt3").removeClass(" activ_kyc");
    $(".btn_vc_kyc_bt1").addClass("activ_kyc");

    $(".cont_kyc_1").addClass("cont_kyc_Activc");
  });

  $(".btn_vc_kyc_bt2 , .btn_c_activx2").click(function () {
    $(".btn_vc_kyc_bt1").removeClass(" activ_kyc");
    $(".btn_vc_kyc_bt3").removeClass(" activ_kyc");
    $(".btn_vc_kyc_bt2").addClass("activ_kyc");

    $(".cont_kyc_1 ").removeClass("cont_kyc_Activc");
    $(".cont_kyc_3 ").removeClass("cont_kyc_Activc");

    $(".cont_kyc_2").addClass("cont_kyc_Activc");
  });

  $(".btn_vc_kyc_bt3 ,.btn_c_activx3").click(function () {
    $(".btn_vc_kyc_bt2").removeClass(" activ_kyc");
    $(".btn_vc_kyc_bt1").removeClass(" activ_kyc");
    $(".btn_vc_kyc_bt3").addClass("activ_kyc");

    $(".cont_kyc_1 ").removeClass("cont_kyc_Activc");
    $(".cont_kyc_2 ").removeClass("cont_kyc_Activc");

    $(".cont_kyc_3").addClass("cont_kyc_Activc");
  });
});

let pass3 = document.getElementById("txtPwd_log");
let eye3 = document.querySelector("#eye3");

function hide_btn3() {
  if (pass3.type === "password") {
    pass3.setAttribute("type", "text");

    eye3.setAttribute("class", "fa fa-eye-slash");
  } else {
    pass3.setAttribute("type", "password");
    eye3.setAttribute("class", "fa fa-eye");
  }
}

let emaiLog = document.getElementById("txtEmail_log");
let passLog = document.getElementById("txtPwd_log");

function validateInput2() {
  //check username is empty

  var vle = emaiLog.value.trim();
  let patt = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

  if (emaiLog.value.trim() === "") {
    onError(emaiLog, "Email cannot be empty");
  } else {
    if (patt.test(vle)) {
      onSuccess(emaiLog, "");
    } else {
      onError(emaiLog, "Email is not valid");
    }
  }

  //password
  if (passLog.value.trim() === "") {
    onError(passLog, "Password cannot be empty");
  } else {
    onSuccess(passLog);
  }
}

function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  parent.classList.remove("error");
  parent.classList.add("success");

  window.location.href = "desboard.html";
}
function onError(input, message) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

var count = 0;

function play_audio(audio) {
  var dsa = audio;

  var cv = document.getElementById(dsa).querySelector(".hllo");
  //   console.log(dsa);

  if (count == 0) {
    count = 1;
    //    cv.play();

    console.log(count);
    document.getElementById(dsa).classList.add("auto_active");
  } else {
    count = 0;
    // cv.pause();
    document.getElementById(dsa).classList.remove("auto_active");
  }
}

// var count = 0;
// const audio_xp = document.querySelectorAll(".audio_vp");

// for( let i = 0; i < audio_xp.length; i++){

//     var cv = audio_xp[i].querySelector(".hllo");

//     if( count == 0){
//         count = 1;
//            cv.play();

//            console.log( count);
//            audio_xp[i].classList.add("auto_active");
//        }else{

//         count = 0;
//         cv.pause();
//         audio_xp[i].classList.remove("auto_active");
//        }
// }

const vido_lp = document.querySelectorAll(".img_bo");

for (let i = 0; i < vido_lp.length; i++) {
  vido_lp[i].querySelector(".audio_vp").addEventListener("click", function () {
    vido_lp[i].querySelector(".videobox_vd").classList.add("activ_vido_bv");
    vido_lp[i].querySelector(".videobox_vd").querySelector("video").play();
  });

  vido_lp[i]
    .querySelector(".videobox_vd")
    .querySelector(".icon_box-vs")
    .addEventListener("click", function () {
      vido_lp[i]
        .querySelector(".videobox_vd")
        .classList.remove("activ_vido_bv");
    });
}

// var slider = document.getElementById("slider5");
// var output = document.getElementById("output5");
// output5.innerHTML = slider5.value;

// slider5.oninput = function() {
//   output5.innerHTML = this.value;
// }

// var slider = document.getElementById("slider2");
// var output = document.getElementById("output2");
// output2.innerHTML = slider2.value;

// slider2.oninput = function() {
//   output2.innerHTML = this.value;
// }

// var slider = document.getElementById("slider3");
// var output = document.getElementById("output3");
// output3.innerHTML = slider3.value;

// slider3.oninput = function() {
//   output3.innerHTML = this.value;
// }

// var slider = document.getElementById("slider4");
// var output = document.getElementById("output4");
// output4.innerHTML = slider4.value;

// slider4.oninput = function() {
//   output4.innerHTML = this.value;
// }

// new 2.0

let pas_rop = document.getElementById("pas_rop_1");
let eyePro1 = document.querySelector("#eyePro1");

function hide_btn_pro1() {
  if (pas_rop.type === "password") {
    pas_rop.setAttribute("type", "text");

    eyePro1.setAttribute("class", "fa fa-eye-slash");
  } else {
    pas_rop.setAttribute("type", "password");
    eyePro1.setAttribute("class", "fa fa-eye");
  }
}

let pas_rop_2 = document.getElementById("pas_rop_2");
let eyePro2 = document.querySelector("#eyePro2");

function hide_btn_pro2() {
  console.log("hello");
  if (pas_rop_2.type === "password") {
    pas_rop_2.setAttribute("type", "text");

    eyePro2.setAttribute("class", "fa fa-eye-slash");
  } else {
    pas_rop_2.setAttribute("type", "password");
    eyePro2.setAttribute("class", "fa fa-eye");
  }
}

let pas_rop_3 = document.getElementById("pas_rop_3");
let eyePro3 = document.querySelector("#eyePro3");

function hide_btn_pro3() {
  if (pas_rop_3.type === "password") {
    pas_rop_3.setAttribute("type", "text");

    eyePro3.setAttribute("class", "fa fa-eye-slash");
  } else {
    pas_rop_3.setAttribute("type", "password");
    eyePro3.setAttribute("class", "fa fa-eye");
  }
}

//Add Input Fields

var max_fields = 10; //Maximum allowed input fields
var wrapper = $(".box_img_clec"); //Input fields wrapper
var add_button = $(".add_fields"); //Add button class or ID
var x = 1; //Initial input field is set to 1

// //- Using an anonymous function:
// document.getElementById("Array_name").onclick = function () {
//   alert("hello!");
// };

//When user click on add input button
$(add_button).click(function (e) {
  e.preventDefault();
  //Check maximum allowed input fields
  if (x < max_fields) {
    x++; //input field increment
    //add input field
    $(wrapper).append(
      `<div class="div_optionImg_text mb-4">
      <div class="circal_box"></div>
      <div class="input_poll_se">
        <input type="text" placeholder="Option 1(Typing State)" class="input_poll_se"/>
        <div class="hover_input"></div>
      </div>
     
      <div class="div_imgb_sp">
        <input type="file" id="input_op" class="d-none" placeholder="Upload File"/>

        <label for="input_op">
            <i class="fa fa-image"></i>
            
        </label>

      </div>

      <div class="clo-box remove_field" >
          <i class="fa fa-close"></i>
      </div>
  </div>`
    );
  }
});

//when user click on remove button
$(wrapper).on("click", ".remove_field", function (e) {
  e.preventDefault();
  $(this).parent("div").remove(); //remove inout field
  x--; //inout field decrement
});
