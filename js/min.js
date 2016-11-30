/**
 * Created by Curso on 30/11/2016.
 */
$.noConflict();
var num="5";
jQuery(document).ready(function ($) {


    alert(num);
    /*var valor = $("#busqueda").val();
    $('#busqueda').val("York");*/
    /*var introducido=$("#dni").val();*/

function getDni(){
    var introducido=$("#dni").val();
    letraDni(introducido);
    console.log(introducido);
    var letra=letraDni(introducido,10);

    console.log(letra);
    return false;

}
$("main").click(function(){
    var introducido=$("#dni").val();
    letraDni(introducido);
    console.log(introducido);
    var letra=letraDni(introducido,10);
    $("main span.resultado").text(letra);
    console.log(letra);
    return false;
})



});

/*function tracear(){


    console.log(valor);
    //york


    valor = $("#busqueda").attr("value");
    console.log(valor);
    valor = $("#busqueda").val();
}*/
function letraDni(introducido){

    var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    if (introducido==parseInt(introducido))
        var letraDni=letras[introducido%23];

    return letraDni;

}