//gnb클릭시 이동
let gnb=document.querySelectorAll(".link");
gnb.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        let target=e.currentTarget.getAttribute("href");
        let targetPosition=document.querySelector(target).offsetTop;
        window.scrollTo({top: targetPosition-10, behavior:"smooth"})
    })
})

//가로스크롤
let web=document.querySelector(".web_wrap_all").offsetTop;
scroll()
function scroll(){
    let scrollTop=window.scrollY;
    let webLeft=scrollTop-web;
    if(scrollTop>webLeft){
        gsap.to(".web_wrap_f",{left:-webLeft, ease:"linear"})
    }
    requestAnimationFrame(scroll)
}

//컨텐츠 나타내기
let secAni=document.querySelectorAll(".ani")
let secTxt=document.querySelectorAll(".pro_ani")
window.addEventListener("scroll",()=>{
    let top=window.scrollY;
    secAni.forEach((tit)=>{
        let reltop=tit.getBoundingClientRect().top
        let absTop=reltop + top;
        if(top>absTop-700){
            tit.classList.add("ani_slideUp");
        }
    })
    secTxt.forEach((txt)=>{
        if(top>txt.offsetTop-600){
            txt.classList.add("ani_slideUp_delay")
        }
    })
})

//상승컴퍼니 팝업창

let body=document.querySelector("body")
let header=document.querySelector("#header")

let popBtn=document.querySelector(".sang_btn")
let sangPopup=document.querySelector(".sang_popup")
let sangClose=document.querySelector(".sang_close")
let over3=document.querySelector(".overlay3")


//design01 팝업창
let pop=document.querySelectorAll("#design_wrap01 .thum")
let close=document.querySelectorAll(".close_btn")
let over=document.querySelectorAll(".overlay")
pop.forEach(function(i,index){
    i.addEventListener("click",function(){
        over[index].style.display="block";
        header.style.zIndex="99"
        body.style.overflow="hidden"
    })
})

close.forEach(function(i){
    i.addEventListener("click",function(){
        this.closest(".overlay").style.display="none"
        header.style.zIndex="9998"
        body.style.overflow="auto"
    })
})
//design02 팝업창
let pop2=document.querySelectorAll(".design02_popup_wrap .overlay")
let slide=document.querySelectorAll(".design02")
console.log(pop2)
slide.forEach(function(sl){
    sl.addEventListener("click",function(){
        let num=this.getAttribute("data-design02")
        pop2[num].style.display="block"
        header.style.zIndex="99"
        body.style.overflow="hidden"
    })
})

close.forEach(function(i){
    i.addEventListener("click",function(){
        this.closest(".overlay").style.display="none"
        header.style.zIndex="9998"
        body.style.overflow="auto"
    })
})




