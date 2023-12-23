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
                                        "<h4>60 MIL NA SUA CONTA!</h4>"+
                                        "<p>$0,15= $60.000,00 na sua conta.</p>"+
                                        "<div class='box-green blink'>"+
                                            "<p class='box-text'>Adquira já!</p>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";

    for (i=0;i<6;i++) {
        document.getElementById("content-wrap").innerHTML += blocoSecondCard;
    }
});
