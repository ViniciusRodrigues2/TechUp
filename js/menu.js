let show = 0;

let menuMobile = document.querySelector('.menu-mobile');
function toogle(event){
    if(event.type === 'touchstart') event.preventDefault
    let nav = document.querySelector('.menu-container');
    document.body.style.overflow = show ? "hidden" : "initial"
    nav.classList.toggle('active',show);
    show = !show;
}
menuMobile.addEventListener('click',toogle);
menuMobile.addEventListener('touchstart',toogle)