const menuBar = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");

menuBar.addEventListener("click", function(){
   nav.classList.toggle("active");
   menuBar.style.display = "none";
   close.style.display ="block";
});

close.addEventListener("click", function(){
   nav.classList.toggle("active");
   close.style.display = "none";
   menuBar.style.display = "block";
})