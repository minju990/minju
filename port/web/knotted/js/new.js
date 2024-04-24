   
    window.addEventListener("DOMContentLoaded", function(){

        let custQ=document.querySelectorAll('.new_Q')
        let custA=document.querySelectorAll('.new_a')
        let i=custQ.length



        const toggles = document.querySelectorAll(".new_Q");

custQ.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });
});
//   custQ.addEventListener("click",function(){
//        custQ.classList.add("active")
//   })
 })

        // let cust_Q=function(el){
        //     let before=document.querySelector(".active") //기존의 사용자가 클릭한 버튼(활성화 된 버튼)
        //         if(before && document.querySelector(".active") !== el){//현재 클릭한 자신(.tit)이외에 활성화된 메뉴가 있다면
        //             before.classList.remove("active")
        //             before.nextElementSibling.style.maxHeight=null;
        //         }
        //         el.classList.toggle("active")
        //         let sub=el.nextElementSibling;
        //         if(sub.style.maxHeight!=0){//서브가 펼쳐져 있으면
        //             sub.style.maxHeight = null
        //         }else{//서브가 닫혀 있으면
        //             sub.style.maxHeight=sub.scrollHeight+"px"
        //         }
        // }
        
        // tits.forEach(function(cu_q){
        //     cu_q.addEventListener("click", function(){
        //         cust_Q(this)
            //click end
        //forEach end



