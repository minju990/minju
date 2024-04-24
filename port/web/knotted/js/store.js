let pop=document.querySelector(".store_popup");
let over=document.querySelector(".overlay");
let btns=document.querySelectorAll(".store_btn");
let close=document.querySelector(".store_close_img");
console.log(btns)
btns[0].addEventListener("click", function(){
    over.classList.add("on");
    pop.classList.add("on");
})

close.addEventListener("click", function(){
    over.classList.remove("on");
    pop.classList.remove("on");
})

