// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style__switcher").classList.toggle("open");
})
// HIDE STYLE -SWITCHER ON SCROLL
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style__switcher").classList.contains("open")){
        document.querySelector(".style__switcher").classList.remove("open");
    }
})
// theme colors
const alternateStyles = document.querySelectorAll(".alternate__style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true");
        }
    })
}
// theme light and dark 
const dayNight = document.querySelector(".day__night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("uil-sun");
    dayNight.querySelector("i").classList.toggle("uil-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("uil-sun");
    }else{
        dayNight.querySelector("i").classList.add("uil-moon");
    }
})