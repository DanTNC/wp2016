/*$(document).ready(function(){
  $(".a").click(function(){
    $("#about").slideToggle("slow");
  });
});*/
var state = 0;
$(document).ready(function(){
  $(".a").click(function(){
    if(state==2){
      $("#contact").slideToggle("slow",function(){
        $("#about").slideToggle("slow");
      });
    }else{
      $("#about").slideToggle("slow");
    }
    state = (state==1?0:1);
    //alert(state);
  });
});
$(document).ready(function(){
  $(".c").click(function(){
    if(state==1){
      $("#about").slideToggle("slow",function(){
         $("#contact").slideToggle("slow");
      });
    }else{
      $("#contact").slideToggle("slow");
    }
    state = (state==2?0:2);
    //alert(state);
  });
});
$(document).mouseup(function(e){
  var _con = $(".link, li");
  if(!_con.is(e.target) && _con.has(e.target).length === 0){
    if(state==1){
      $("#about").slideToggle("slow");
    }else if(state==2){
      $("#contact").slideToggle("slow");
    }
    state=0;
  }
});

var ele=document.getElementById("contact");
document.getElementById("contact").getElementByTagName("button").addEventListener("click", change());

function change(){
  document.getElementById("contact").getElementByTagName("button").style.backgroundColor=document.getElementByTagName("body").style.backgroundColor;
}
