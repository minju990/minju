addEventListener("DOMContentLoaded",()=>{
    const link=document.querySelectorAll(".link")
    for(let i=0; i<link.length; i++){
        link[i].addEventListener("click",()=>{
            for(let e=0; e<link.length; e++){
                link[e].classList.remove("on")
            }
            link[i].classList.add("on")
        })
    }
})

let new_do=document.querySelectorAll(".new_do")
let overlay=document.querySelector(".overlay")
let colse=document.querySelectorAll(".product_close")
let heart=document.querySelectorAll(".heart")

new_do.forEach(function(d){
    d.addEventListener("click",function(e){
        e.preventDefault()
        overlay.style.display="block"
        this.nextElementSibling.style.display="block"
console.log(this.nextElementSibling)
    })
})

colse.forEach(function(c){
    c.addEventListener("click", function(){
        overlay.style.display="none"
        this.parentNode.style.display="none"
    })
})

let he=true
heart.forEach(function(h){
    h.addEventListener("click",function(){
        if(he){
        this.children[0].src="./images/visual/heart2.png"
        he=false
        }else{
        this.children[0].src="./images/visual/heart.png"
        he=true
        }
    })
       
})

