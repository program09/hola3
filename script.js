document.addEventListener("DOMContentLoaded", function () {
    const heart = document.querySelector(".heart");
    const mensaje = document.querySelector(".mensaje");

    setTimeout(() => {
        heart.classList.add("explosion");   
        mensaje.classList.add("show");   
    }, 5000);  
});
