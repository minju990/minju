   
    
    let site=document.querySelector(".qna_sel")
    let btn=document.querySelector(".qna_btn_sel")
    let pannel=document.querySelector(".qna_sel_menu")
    let li=document.querySelectorAll(".qna_sel_list li")
    let list=document.querySelector(".qna_sel_list")
    let open=false
 
site.addEventListener("click", function(){
    if(open===false){
        pannel.style.display="block"
        this.classList.add("active")
        open=true
    }else{
        pannel.style.display="none"
        this.classList.remove("active")
        open=false
    }
   

        })
li.forEach(function(el){
el.addEventListener("click", ()=>{     
document.querySelector(".qna_btn_sel").textContent=el.textContent

})
})
            
            

        

 