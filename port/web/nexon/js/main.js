let w_size=window.innerWidth;
let $html=$("html");
let pc=1400, mobile=1399;
let lnbH=$(".h").innerHeight();
window.addEventListener("resize",function(){
  w_size=window.innerWidth;
  winSize()
  if(w_size<1400 || w_size>1400){
      $(".lnb").removeAttr("style")
      $(".nav").removeClass("active")
  }
})

winSize()
function winSize(){
    w_size=window.innerWidth;
    if(w_size>=1400 && !$html.hasClass("pc")){ 
        $html.removeClass("mobile");
        $html.addClass("pc");
    }else if(w_size<1400 && !$html.hasClass("mobile")){ 
        $html.removeClass("pc");
        $html.addClass("mobile");
    }
}

function gnbPlay(){
  if($html.hasClass("mobile")){
      $(".lnb_wrap:visible").stop().hide()
      $html.css({overflow:"auto"})
      $(".main").removeClass("block")
      if($(this).next(".lnb_wrap").is(":hidden")){
          $(this).next(".lnb_wrap").stop().show();
          $html.css({overflow:"hidden"})
          $(this).addClass("block")
      }
  }else{ 
      $(".lnb_wrap").css({maxHeight:lnbH})
      $(".nav_bg").css({maxHeight:"400px"})
  }
}

function gnbLeave(){
  $(".lnb_wrap").css({maxHeight:"0"})
  $(".nav_bg").css({maxHeight:"0"})
}

$(document).on("click", ".mobile .main", gnbPlay)
$(document).on("mouseenter focusin", ".pc .dep1", gnbPlay)
$(document).on("mouseleave focusout", ".pc .dep1", gnbLeave)

$(".mmenu").on("click",function(){
  $(".nav").addClass("active")
})
$(".close_btn").on("click",function(){
  $(".nav").removeClass("active")
})