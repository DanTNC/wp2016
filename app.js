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

$(document).ready(function(){
  $("#c1").click(function(){
    window.open('https://www.facebook.com/profile.php?id=100003934883716','_blank');
  });
});

$(document).ready(function(){
  $("#c2").click(function(){
    window.open('https://www.instagram.com/fad11203/','_blank');
  });
});

$(document).ready(function(){
  $("#about button").click(function(){
    $("#about").slideToggle("slow");
    var imgbox=document.getElementByClassName("works");
    for(var i=0;i<imgbox.length;i++){
      imgbox[i].fadeOut(slow);
    }
  });
});

$(document).mouseup(function(e){
  var _con = $(".link, li, #about button");
  if(!_con.is(e.target) && _con.has(e.target).length === 0){
    if(state==1){
      $("#about").slideToggle("slow");
    }else if(state==2){
      $("#contact").slideToggle("slow");
    }
    state=0;
  }
});
