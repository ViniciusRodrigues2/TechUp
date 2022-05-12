let show = 0;
let menuMobile = document.querySelector('.menu-mobile');
function toogle(){
    let nav = document.querySelector('.menu-container');
    document.body.style.overflow = show ? "hidden" : "initial"
    nav.classList.toggle('active',show);
    show = !show;
}
menuMobile.addEventListener('click',toogle);