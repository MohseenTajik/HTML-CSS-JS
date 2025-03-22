// script.js
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const list = document.querySelectorAll(".list");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("More information is coming!");
        });
    });
    list.forEach(button => {
        button.addEventListener("click", function () {
            alert("More information is coming!");
        });
    });
});
