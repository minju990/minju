   
    window.addEventListener("DOMContentLoaded", function(){
        let open=document.querySelector(".btn")
        let gnb=document.querySelector(".gnb")
        let arr=document.querySelector(".arrow_back")
        let tits=document.querySelectorAll(".tit")
        let sub=document.querySelectorAll(".sub")
        let ser=document.querySelector(".search")
        let gnb_list=document.querySelector(".gnb_list")
        let search_a=document.querySelector(".search_a")
        open.addEventListener("click",function(){
            gnb.classList.add('on')
        })

        arr.addEventListener("click", function(){
            gnb.classList.remove('on')
        })
        tits.forEach(function(el){
            el.addEventListener("click", function(){
                tits.forEach(function(al){
                  al.classList.remove("active")  
                })
                this.classList.add("active")
        })
        ser.addEventListener("click", function(){
            gnb_list.remove('on')
        })
        ser.addEventListener("click",function(){
            search_a.classList.add('on')
        })
    })      
    
    })

