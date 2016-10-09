/*var bta=document.getElementById("a");
var btc=document.getElementById("c");
bta.addEventListener("click", displayAbout);
btc.addEventListener("click", displayContact);*/
$(document).ready(function(){
  $(".a").click(function(){
    $("#image").fadeOut("slow",function(){
     $("pre").fadeIn("slow");
    });
  });
});
