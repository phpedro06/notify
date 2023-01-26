function notSucesso() {
    $(".notify").css("display","flex").css("border-bottom","4px solid rgb(9, 255, 0)")
    $(".titleNot").css("color","rgb(9, 255, 0)").css("filter","drop-shadow(0px 0px 5px rgb(9, 255, 0, 0.5))")
    $(".suNot").css("display","flex")
    $(".alNot").css("display","none")
    $(".erNot").css("display","none")
    var titlesucNot = document.querySelector('.titleNot');
    var textsucNot = document.querySelector('.textNot');
    titlesucNot.innerHTML = "Sucesso!";
    textsucNot.innerHTML = "Notify sucesso.";
    setTimeout (function() {
        $(".notify").css("display","none")
    }, 5000);
}
function notAviso() {
    $(".notify").css("display","flex").css("border-bottom","4px solid rgb(255, 208, 0)")
    $(".titleNot").css("color","rgb(255, 208, 0)").css("filter","drop-shadow(0px 0px 5px rgb(255, 208, 0, 0.5))")
    $(".suNot").css("display","none")
    $(".alNot").css("display","flex")
    $(".erNot").css("display","none")
    var titlesucNot = document.querySelector('.titleNot');
    var textsucNot = document.querySelector('.textNot');
    titlesucNot.innerHTML = "Aviso!";
    textsucNot.innerHTML = "Notify aviso.";
    setTimeout (function() {
        $(".notify").css("display","none")
    }, 5000);
}
function notErro() {
    $(".notify").css("display","flex").css("border-bottom","4px solid red")
    $(".titleNot").css("color","red").css("filter","drop-shadow(0px 0px 5px rgb(255, 0, 0, 0.5))")
    $(".suNot").css("display","none")
    $(".alNot").css("display","none")
    $(".erNot").css("display","flex")
    var titlesucNot = document.querySelector('.titleNot');
    var textsucNot = document.querySelector('.textNot');
    titlesucNot.innerHTML = "Aviso!";
    textsucNot.innerHTML = "Notify erro.";
    setTimeout (function() {
        $(".notify").css("display","none")
    }, 5000);
}