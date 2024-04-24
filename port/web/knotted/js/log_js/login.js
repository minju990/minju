let pw=document.querySelector("#loginPw");
let icon=document.querySelector(".pw_eye");
let pwType=pw.getAttribute("type");

icon.addEventListener("click",function(){
    if(pwType==='password'){
        pw.setAttribute("type","text");
        this.children[0].setAttribute("src","./images/common/eye-off.svg");
        pwType="text"
    }else{
        pw.setAttribute("type","password");
        this.children[0].setAttribute("src","./images/common/eye.svg");
        pwType="password"
    }
})


