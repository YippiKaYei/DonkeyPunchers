/**
 * Created by Curso on 30/11/2016.
 */
$.noConflict();
var num="5";
/*var concierto =["Perros Kon Asma + Donkey Punchers + Skimales","Donkey Punchers", "Indix + Donkey Punchers + Alshain"];
var fecha =["31/10/2016","31/01/2016","18/11/2016"]
var lugar =["Bar Txoko (Arkotxa)","KRML BZRK (Santuxu)", "Sentinel Rock Club (Erandio)"];
var precio =["Gratis","Gratis","3euros"];*/
const URL="http://localhost:2403/conciertos";
var lugar="";
var fecha="";
var precio="";
var con="";



jQuery(document).ready(function ($) {

    function ajax(opciones) {
        return new Promise(function (resolve, reject) {
            $.ajax(opciones).done(resolve).fail(reject);
        });
    }


    function cargaConciertos(data){
        for(var i=0; data.length;i++){
            var concierto=new Array();
            var y=0;
            while (y<data[i].concierto.length){
                concierto.push(data[i].concierto[y]);

                y++;
            }

            var id=data[i].id;
            lugar=data[i].lugar;
            fecha=data[i].fecha;
            precio=data[i].precio;
            alert("dentroDeLaPromesa"+ data[i].concierto);
            alert(lugar);
            insertarConciertosTabla(id,concierto, lugar, fecha, precio);
        }
    }

    function insertarConciertosTabla(id, concierto, lugar, fecha, precio){
        var identificador=id;
        con=concierto[0];
        for(var i=1;i<concierto.length;i++){
            if (i!=concierto.length){
                con=con+", ";
            }
            con=con+concierto[i];
            alert( "conc"+concierto[i]);
        }

        var html_text = "<tr>" +
            "<tr>" +
            "<td class='conciCartel'>" + con + "</td>" +
            "<td>" + lugar + "</td>" +
            "<td>" + fecha + "</td>" +
            "<td>" + precio + "</td>" +
            "<td align='center' ><button class='edtBtn' value='"+identificador+"'>Editar</button></td>" +
            "<td align='center'  ><button class='dltBtn' value='"+identificador+"'>Borrar </button></td>" +
            "</tr>";
        $('#listado-conciertos tbody').append(html_text);
    }

    function mostrarXConciertos(long){

    }

    function insertConcierto(concierto, lugar, fecha, precio){
        var iId;
        var iConci=new Array();
        iConci=concierto.split(', ');
        datos={concierto:iConci,
                lugar:lugar,
                fecha:fecha,
                precio:precio

        };
        ajax({url:URL, type:"POST", data:datos}).then(function (data){
            iId=data.id;
            alert("Concierto Insertado");
            alert(iId);


        }).catch(function(error){
            console.log(error);
            alert("Error al insertar, maldito gilí");
        });
        return iId;

    }

    function recogerErrorAjax(jqXHR, textStatus, errorThrown) {
        alert("Error:" + jqXHR.toString() + textStatus + errorThrown);
    }

    ajax({url: URL, type: "GET"})
        .then(cargaConciertos, recogerErrorAjax)
        .catch(function errorHandler(error) {

        });

    /*$("#listado-conciertos tbody button").click(function (e) {
        alert("HAs pulsado en editar click");
    });*/

    $("#listado-conciertos tbody").on("click", "button.edtBtn", function (e) {
        alert("Has pulsado en editar con ON");
        alert($(this).attr("value"));
        //modal.concierto.value=holi;
        //(input.#concierto).attr(Adios);
        var datos={id: $(this).attr("value")};

        ajax({url:URL, type:"GET", data:datos}).then(function (data){
            $("#concierto").focus();

            $("#concierto").val(data.concierto);
            $("#fecha").val(data.fecha);
            $("#lugar").val(data.lugar);
            $("#precio").val(data.precio);



        }).catch(function(error){
            console.log(error);
            alert(giliiiii);
        });



        modal.style.display = "block";



     });
    $("#listado-conciertos tbody").on("click", "button.dltBtn", function (e) {
        alert("Has pulsado en borrar con ON");
        ajax({url: URL, type: "DELETE", data: {id: $(this).attr("value")}})
            .then(cargarMensaje("El concierto ha sido borrado"), recogerErrorAjax)
            .catch(function errorHandler(error) {

            });

    });

    $("#myModal").on("click", "button.editarModal", function (e) {
        alert("Has pulsado en bAÑADIR DENTRO FANTASIA");


            var nConci=$("#concierto").val();
            var nLugar=$("#lugar").val();
            var nPrecio=$("#precio").val();
            var nFecha=$("#fecha").val();
            var nId=insertConcierto(nConci,nLugar,nFecha,nPrecio);




    });

    $("#listado-conciertos thead input").click(function (e) {

        if ($(this).prop("checked")) {
            $("#listado-conciertos tbody input").prop("checked", true);
        } else {
            $("#listado-conciertos tbody input").prop("checked", false);
        }


    });

    /*cargaConciertos();


/*$("btnHoli").click(function(){
    var introducido=$("#dni").val();
    letraDni(introducido);
    console.log(introducido);
    var letra=letraDni(introducido,10);
    $("main span.resultado").text(letra);
    console.log(letra);
    return false;
})*/

// Get the modal
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById("myBtn");


    var btnEd=document.getElementsByClassName("editarModal");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

    btnEd.onclick=function(){
        modal.style.display = "none";
    };

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        $("#concierto").val();
        $("#fecha").val();
        $("#lugar").val();
        $("#precio").val();
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.
            modal.style.display = "none";
        }
    }

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