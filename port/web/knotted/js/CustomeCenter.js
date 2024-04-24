   
    window.addEventListener("DOMContentLoaded", function(){

        let custQ=document.querySelectorAll('.cust_Q')
        let custA=document.querySelectorAll('.cust_a')
        let betxt=document.querySelectorAll("cust_menu_txt li")
        let i=custQ.length
 

        const toggles = document.querySelectorAll(".cust_Q");

custQ.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });
});
    })