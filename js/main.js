$(window).ready(function(){

    let menuResponsive = document.getElementById('menuResponsive');
    let menuNav = document.getElementById('navMenu');
    let botonMenu = document.getElementById('menuClick')

    if(window.innerWidth < 460){
        menuNav.style.display = 'none'
        menuResponsive.style.display = "block";

    }

    $(window).resize(function(e) {

        let windowWidth = window.innerWidth;

        if(windowWidth <= 460){
            menuNav.style.display = 'none'
            menuResponsive.style.display = "block";
        }
        else{
            menuNav.style.display = ''
            menuResponsive.style.display = "none";
        }

    })

    let menuResponsivo = document.getElementById('menuResponsivo');
    $('#menuClick').click(function (e) {
        console.log(e)
        e.preventDefault();

        menuResponsivo.style.top = '0px';

    })

    $('#closeMenuResponsive').click(function (e) {
        e.preventDefault()
        menuResponsivo.style.top = '-500px';
    })
    
})