/*var bta=document.getElementById("a");
var btc=document.getElementById("c");
bta.addEventListener("click", displayAbout);
btc.addEventListener("click", displayContact);*/
$(document).ready(function(){
  $(".a").click(function(){
    $("img").animate({top: '+=40%'},function(){
     $("pre").fadeIn("slow");
    });
  });
});
