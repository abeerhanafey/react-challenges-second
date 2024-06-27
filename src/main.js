document.querySelector("#mode").onclick = function () {
    document.querySelector(".App").classList.toggle("bg-lime-100");
    document.querySelector(".App").classList.toggle("bg-lime-900");
    document.querySelector("#h1").classList.toggle("text-lime-700");
    document.querySelector("#h1").classList.toggle("text-lime-100");
    document.querySelector("#fp").classList.toggle("text-lime-700");
    document.querySelector("#fp").classList.toggle("text-lime-100");
    document.querySelector(".ph").classList.toggle("text-lime-700");
    document.querySelector(".ph").classList.toggle("text-lime-100");
    document.querySelectorAll(".background h3").forEach((el) => {
        el.classList.toggle("text-lime-700");
        el.classList.toggle("text-lime-100");
    });
    document.querySelector(".post").classList.toggle("bg-lime-900");
    document.querySelector(".post").classList.toggle("bg-lime-100");
    document.querySelectorAll(".background").forEach((el) => {
        el.classList.toggle("bg-lime-900")
        el.classList.toggle("bg-lime-100")
    })
    
}
