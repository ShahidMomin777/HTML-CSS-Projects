

let subMenu = document.querySelector(".sub-menu");

window.addEventListener("click", (e)=>{
    if(e.target.closest(".menu-button")){
        subMenu.style.display ="flex";
    }

    else{
        subMenu.style.display="none";
    }
});

document.getElementsByClassName('menu-icon')[0].addEventListener("clikc",()=>{

});


