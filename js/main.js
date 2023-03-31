var slide = new Array("assets/img/barman.jpg", "assets/img/Employee-Salumeria-souriante.jpg");
var slideAlt = new Array("Photo de Sergio, notre barman chez La Salumeria", "Photo de Carolina, serveuse chez La Salumeria");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").setAttribute('src', slide[numero]);
    document.getElementById("slide").setAttribute('alt', slideAlt[numero]);
}