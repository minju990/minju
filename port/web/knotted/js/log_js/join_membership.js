let id=document.querySelector("#userId");
let pw=document.querySelector("#userPw");
let pw2=document.querySelector("#userPw2");
let icon=document.querySelectorAll(".eye_btn");
let pwType=pw.getAttribute("type");

pw2.addEventListener("change", function(){
    if(pw.value !== pw2.value){
        alert("비밀번호가 다릅니다");
        pw2.value="";
        pw2.focus();
    }
})


icon.forEach(function(el){
    el.addEventListener("click", function(){
        if(pwType === "password"){
            pw.setAttribute("type", "text");
            this.children[0].setAttribute("src", "../images/common/eye-off.svg");
            pwType="text";
        }else{
            pw.setAttribute("type", "password");
            this.children[0].setAttribute("src", "../images/common/eye.svg");
            pwType="password";
        }
    })
})


let check=document.querySelector("#userAgre");
let chs=document.querySelectorAll(".agrees");

check.addEventListener("click", checkBox);
function checkBox(){
    if(check.checked){
        chs.forEach(function(ag){
            ag.checked=true;
        })
    }else{
        chs.forEach(function(ag){
            ag.checked=false;
        })
    }
}