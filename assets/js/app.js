$(document).ready(function(){
  // navbar DropDown
  $(".navbar .nav-item.dropdown").click(function(){
    $(this).toggleClass("show")
  })


  $(".closeIcon").click(function(){
    $(".navbar-collapse").animate({"right":"-100%"},500)
    $(".navbar-collapse").removeClass("show")
  })
  $(".navbar-toggler").click(function(){
    $(".navbar-collapse").animate({"right":"0%"},500)
    $(".navbar-collapse").removeClass("show")
  })
})

