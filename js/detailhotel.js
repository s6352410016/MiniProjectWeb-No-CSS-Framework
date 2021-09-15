// onload effect
$(window).on("load",function(){
    $(".loader-container").fadeOut(2000);
});

// hamburgermenu
$(document).ready(function () {
    $('.hamburger').on("click", function () {
        $(".nav-grid").toggleClass("open");
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}

// slide image
var indexValue = 1;
showImg(indexValue);
function btn_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
    var i;
    const img = document.querySelectorAll('img'); 
    const sliders = document.querySelectorAll('.btn-sliders span'); 
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0; i < sliders.length; i++){
        sliders[i].style.background = "rgba(255, 255, 255, 0.1)";
    }
    img[indexValue-1].style.display = "block";
    sliders[indexValue-1].style.background = "#fff";
}

// show form
document.querySelector(".modal1 svg").onclick = ()=>{
    document.querySelector(".modal1").classList.toggle("modal1-off");
}
    document.querySelector("#formSubmit1").onsubmit = ()=>{
    document.querySelector(".modal1").classList.toggle("modal1-off");
    summaryShow();
    return false;
}

function summaryShow(){
    const formSubmit = document.querySelector("#formSubmit1");
    var formData = ["#fullname","#email","#phonenumber","#check-in","#time"];
    var formDataGet = ["#modalName","#modalEmail","#modalTel","#modalDate","#modalTime"];
    for(let i = 0;formData.length > i;i++){
    document.querySelector(".modal1 "+formDataGet[i]).innerHTML = formSubmit.querySelector(formData[i]).value;
    }
}