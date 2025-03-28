// script.js
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const lists = document.querySelectorAll(".list");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("More information is coming!");
        });
    });
    lists.forEach(list => {
        list.addEventListener("click", function () {
            alert("More information is coming!");
        });
    });
});