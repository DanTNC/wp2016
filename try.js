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
    state = (state!=0?0:1);
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
    state = (state!=0?0:2);
    //alert(state);
  });
});
