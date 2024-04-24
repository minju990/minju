let agree=document.querySelector(".sugg_agree_ok");
let submit=document.querySelector(".sugg_submit");
agree.addEventListener("click", function(){
    this.classList.add("active");
    submit.classList.add("active");
})