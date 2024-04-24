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


let heart=document.querySelectorAll(".heart")
console.log(heart)


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

