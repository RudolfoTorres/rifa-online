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

    var blocoSecondCard = "<div class='card'>"+
                                "<div class='second-container'>"+
                                    "<div class='second-img'></div>"+
                                    "<div class='infos'>"+
                                        "<h4>EDIÇÃO MILIONÁRIA</h4>"+
                                        "<p>NA PROMO R$2,49 = CARRETA + CEGONHA + 10 CARROS</p>"+
                                        "<div class='box-green blink'>"+
                                            "<p class='box-text'>Corre que está acabando!</p>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";

    for (i=0;i<=2;i++) {
        document.getElementById("content-wrap").innerHTML += blocoSecondCard;
    }
});