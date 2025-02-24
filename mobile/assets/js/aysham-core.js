function openParentdropDown(e) {
    let o = e.closest("li").querySelector(".dropdownmenu"),
       t = o.classList.contains("hidden");
    document.querySelectorAll(".toggleSubMenuBox").forEach(e => {
       e.querySelector(".arrow-icon-menu").classList.remove("rotate-180")
    }), document.querySelectorAll(".dropdownmenu-parent").forEach(e => {
       e.classList.add("hidden")
    }), document.querySelectorAll(".dropdownmenu").forEach(e => {
       e.classList.add("hidden"), screen.width <= 1024 && e.closest("li").querySelector(".arrow-icon-menu").classList.remove("rotate-180")
    }), t ? (o.classList.remove("hidden"), e.querySelector(".arrow-icon-menu").classList.add("rotate-180")) : (o.classList.add("hidden"), e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"))
 }
 
 function opendropDown(e) {
    let o = e.closest("li").querySelector(".dropdownmenu");
    o.classList.contains("hidden") ? (o.closest("li").closest("ul").querySelectorAll(".dropdownmenu").forEach(e => {
       e.classList.add("hidden"), screen.width <= 1024 && e.closest("li").querySelector(".arrow-icon-menu").classList.remove("rotate-180")
    }), screen.width <= 1024 && e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"), o.classList.remove("hidden"), screen.width <= 1024 && (e.querySelector(".arrow-icon-menu").classList.remove("rotate-90"), e.querySelector(".arrow-icon-menu").classList.remove("max-lg:rotate-0"), e.querySelector(".arrow-icon-menu").classList.add("rotate-180"))) : (o.closest("li").closest("ul").querySelectorAll(".dropdownmenu").forEach(e => {
       e.classList.add("hidden"), screen.width <= 1024 && e.closest("li").querySelector(".arrow-icon-menu").classList.remove("rotate-180")
    }), screen.width <= 1024 && e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"))
 }
 
 function scrollToMenu() {
    const e = document.getElementById("menu-box").offsetTop;
    window.scrollTo({
       top: e,
       behavior: "smooth"
    })
 }
 
 function openHamburgerMenu(e) {
    document.getElementById("menu-box").classList.add("header-visible"), scrollToMenu()
 }
 
 function closeHamburgerMenu(e) {
    document.getElementById("menu-box").classList.remove("header-visible")
 }