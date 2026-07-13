function bildAnzeigen(bild){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightboxBild").src=bild.src;

}

function schliessen(){

document.getElementById("lightbox").style.display="none";

}

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("aktiv");
});

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("aktiv");

    });

});