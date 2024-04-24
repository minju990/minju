let cartCheck=document.querySelector("#cartcheck");
let cartOrder=document.querySelectorAll("#cartorder");

cartCheck.addEventListener("click",checkBox);
function checkBox(){
    if(cartCheck.checked){
        cartOrder.forEach(function(c){
            c.checked=true;
        })
    }else{
        cartOrder.forEach(function(c){
            c.checked=false;
        })
    }
}


let btn=document.querySelectorAll(".cart_btn");
let num=document.querySelector(".cart_num_txt");
let price=document.querySelector(".price1");
let total=document.querySelector(".price3");
let numTxt=1;
let cost=10900
let newCost
let result=cost.toLocaleString();
let totalPrice=()=>{
    num.textContent=numTxt
    result=(cost*numTxt).toLocaleString()
    price.textContent=result
    total.textContent=(cost*numTxt+3000).toLocaleString()

}
btn[1].addEventListener("click",()=>{
    numTxt=numTxt+1
    totalPrice()
    
})
btn[0].addEventListener("click",()=>{
    numTxt=numTxt-1
    if(numTxt<1){numTxt=1}
    totalPrice()
})