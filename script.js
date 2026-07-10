function bildAnzeigen(bild){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightboxBild").src=bild.src;

}

function schliessen(){

document.getElementById("lightbox").style.display="none";

}