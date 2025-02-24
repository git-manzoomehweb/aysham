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
 document.addEventListener("DOMContentLoaded", function () {
   const firstLi = document.querySelector('.category-items li');
 if (firstLi) {
  firstLi.classList.add('active-place');
 }
 loadInitialQuestion();
 });
 function loadInitialitems() {
   var selectedElement = document.querySelector(".category-items .active-place");
   if (selectedElement) {
      load_items(selectedElement);
   }
 }
 function load_items(e) {
   var t = e;
   document.querySelectorAll(".category-items li").forEach(function(item) {
       item.classList.remove("active-place");
   });
   t.classList.add("active-place");
   var a = t.getAttribute("data-id");
   t.closest(".items-show").querySelector(".items-loading").classList.remove("hidden");
   fetch("/load-items.bc?id=" + a)
       .then(response => response.text())
       .then(data => {
           t.closest(".items-show").querySelector(".items-loading").classList.add("hidden");
           var loadQuestionsElement = t.closest(".items-show").querySelector(".load-items");
           loadQuestionsElement.innerHTML = data;
           var scripts = loadQuestionsElement.querySelectorAll("script");
           scripts.forEach(function(script) {
               eval(script.textContent);
           });
       })
       .catch(error => console.error('Error loading items:', error));
 }
 document.querySelectorAll(".tour-price").forEach(function (element) {
   element.textContent = element.textContent.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1/");
});