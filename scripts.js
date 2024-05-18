var buttons = document.querySelectorAll(".show-details-button");
var contents = document.querySelectorAll(".hidden-content");

buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        contents[index].classList.toggle("show");
    });
});