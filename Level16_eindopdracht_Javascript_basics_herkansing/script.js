//standaard staat de toggleNavStatus op false//
let toggleNavStatus = false;

//Deze functie zorgt ervoor dat de togglestatus verandert naar true of false indien er op de haburger icon wordt geklikt//
document.querySelector(".btn-toggle-nav").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-sidebar");

    //menu wordt zichtbaar//
    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";
        toggleNavStatus = true;
    }
    //menu wordt verborgen//
    else if (toggleNavStatus === true) {
        getSidebar.style.visibility = "hidden";
        toggleNavStatus = false;
    }
});

//Zorgt ervoor dat de homebackground verandert van kleur en sluit het menu//
document.getElementById("homeBackground").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-sidebar");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'lightgray';
});

document.getElementById("redBackground").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-sidebar");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'red';
});

document.getElementById("orangeBackground").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-sidebar");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'orange';
});

document.getElementById("purpleBackground").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-sidebar");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'purple';
});

document.getElementById("greenBackground").addEventListener("click", function () {
    const getSidebar = document.querySelector(".nav-sidebar");
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
    document.body.style.backgroundColor = 'green';
});

