$(document).ready(function(){
    var map = false;
    $("#btn-menu").click(function(){
        if (!map){
            map = true;
            $(".icon").attr("src", "assets/img/close_white_36dp.svg");
            $(".mobile-menu").slideDown("slow");
        }else{
            map = false;
            $(".icon").attr("src", "assets/img/menu_white_36dp.svg");
            $(".mobile-menu").slideUp("slow");
        }
    });
});