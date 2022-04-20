
var imagens = ['/images/image1.png','/images/image2.png'];
var div_dotz = document.getElementById("div__dotz");

var cont = 1;
var soma;

function mudarCor(){
    let nav_item = document.getElementsByClassName('header__nav-item')

}

function menuItemColor(){
    let inicio = document.getElementById("inicio");
    let profissional = document.getElementById("profissional");
    let instituicao = document.getElementById("instituicao");
    let consumidor = document.getElementById("consumidor")

    
}

function addNovoDotz(){   
    for (var i = 0; i < imagens.length; i++){
        var dotz = '<div class="dot" id="item-dotz'+ `${i+1}` +'"></div>';
        div_dotz.innerHTML += dotz
    }
}

function autoSlide() {
    document.getElementById("image").src=imagens[cont];
    if(cont < imagens.length - 1){
        cont++;
    }
    else{
        cont = 0;
    }
    setTimeout("autoSlide()" , 4000);
}

addNovoDotz();
window.onload = autoSlide;

/*======================================================
                    MENU MOBILE*/
const btnMenu = document.getElementById('btn-menu');
const btnInicio = document.getElementById('inicio');
const btnProfi = document.getElementById('profissional');
const btnInsti = document.getElementById('instituicao');
const btnConsu = document.getElementById('consumidor')

function viewMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', viewMenu);
btnInicio.addEventListener('click', viewMenu);
btnProfi.addEventListener('click', viewMenu);
btnInsti.addEventListener('click', viewMenu);
btnConsu.addEventListener('click', viewMenu);