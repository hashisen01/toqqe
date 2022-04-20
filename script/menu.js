const btnMenu = document.getElementById("btn-menu");
const btnInicio = document.getElementById("inicio");
const btnProfi = document.getElementById("profissional");
const btnInsti = document.getElementById("instituicao");
const btnConsu = document.getElementById("consumidor");

function viewMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

btnMenu.addEventListener("click", viewMenu);
btnInicio.addEventListener("click", viewMenu);
btnProfi.addEventListener("click", viewMenu);
btnInsti.addEventListener("click", viewMenu);
btnConsu.addEventListener("click", viewMenu);