const menu = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");
const menuIcon = menu.querySelector("i");

menu.addEventListener("click",(e)=>{
    navLink.classList.toggle("open");

    const isOpen = navLink.classList.contains("open");
    menuIcon.setAttribute("class",isOpen? "ri-menu-line":"ri-menu-line")
})

navLink.addEventListener("click",(e)=>{
    navLink.classList.remove("open");
    menuIcon.setAttribute("class","ri-menu-line")
})

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};
ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header_content h1, .header_content p",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_btn",{
    ...scrollRevealOption,
    delay:550,
});