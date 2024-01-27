const menulist=document.querySelector(".exercise ul");

menuList.classList.add("menu");

const menuElement=document.querySelectorAll(".exercise li");

menuElement.forEach(function (element){
    element.classList.add ("menuElement");
})
const errorElements=document.querySelectorAll(".error");

errorElement.forEach(function (element){
    element.classList.remove("error");
})