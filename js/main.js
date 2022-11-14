$(function(){
    var navbar=$('.navbar');
    $(window).scroll(function(){
    if($(window).scrollTop() <=40){
        navbar.removeclass('navbar-scroll');
    }else{
        navbar.addclass('navbar-scroll');
    }
});
});