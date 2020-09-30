$(window).ready(function(){

    let menuResponsive = document.getElementById('menuResponsive');
    let menuNav = document.getElementById('navMenu');

    if(window.innerWidth < 460){
        menuNav.style.display = 'none'
        menuResponsive.style.display = "block";

        console.log(menuNav.style.display);
        console.log(menuResponsive.style.display);
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

})