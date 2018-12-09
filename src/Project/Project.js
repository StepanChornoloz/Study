import './project.scss';

let selectPlanButtons = document.querySelectorAll(".banner__box_container button");
let burgerButton = document.querySelector('.burger');
let mobileNav = document.querySelector('.navigation_desc');


for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        mobileNav.style.display = "block";
    });
  }

burgerButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
});

