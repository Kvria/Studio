$(document).ready(function(){
  $("#design").click(function(){
    $(".designIcon").toggle();
    $(".pDesign").toggle();
  });
  $("#devs").click(function(){
    $(".devIcon").toggle();
    $(".dment").toggle();
  });
  $("#management").click(function(){
    $(".prodIcon").toggle();
    $(".product").toggle();
  });
  $(".image1").hover(function(){
    $(".text1").toggle();
  });
  $(".image2").hover(function(){
    $(".text2").toggle();
  });
});
