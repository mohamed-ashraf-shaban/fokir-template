// $(function(){
//   var scroll = $(window).scrollTop();
// var navHeight = $(".navbar").outerHeight();


// $(window).scroll(function(){
//     var scrolled = $(document).scrollTop();
//   if(scrolled > navHeight){
//     $(".navbar").addClass("animate");
//   }else{
//     $(".navbar").removeClass("animate");
//   }

// if(scrolled > scroll){
    
//     $(".navbar").removeClass("sticky");
//   }else{
//     $(".navbar").addClass("sticky");
//   }

// });


// });

const toggleBtn = document.getElementsByClassName("toggle-nav")[0];

const navbarLInks = document.getElementsByClassName("links")[0];

toggleBtn.addEventListener("click" , () => {
  $(".navbar").css("background" ,"#333");
$(".links").slideToggle();

})

var navi = $("#mainOffset").offset().top;

$(window).scroll(function(){

  var wScroll = $(window).scrollTop();
 

 if(wScroll > navi){
   $(".navbar").css("backgroundColor" ,"rgba(0,0,0,.8)" );
 }else{
  $(".navbar").css("backgroundColor" ,"transparent" );
 }
});

$("a").click(function(e){
var  aHref= $(e.target).attr("href");
  var sectionOffset = $(aHref).offset().top;

$("html,body").animate({scrollTop:sectionOffset} , 2000);
})

let ourStatisticOffset = document.querySelector(".our-statistic");
let spanNum = document.querySelectorAll(".number"); 
started = false;

window.onscroll = function(){
  
  // ========================================counter=========================================
      if(window.scrollY >= ourStatisticOffset.offsetTop - 300){
          if(!started){
              spanNum.forEach((number) => startCount(number));
          }
          started = true;
      }
  
  }
  // ========================================= counter function ========================
  function startCount(el){
      let goal = el.dataset.goal;
      let count = setInterval(() => {
          el.textContent++
          if(el.textContent == goal){
              clearInterval(count);
          }
      }, 100 / goal);
  }


// =================================== typed js==================
var typed = new Typed('.type', {
    strings: ["Designer.", "Developer."],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });
  

// ==================== shuffle for galary======================
var config = document.querySelector(".mydiv");
var mixer = mixitup(config);
