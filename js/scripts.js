/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// const navLinkEl = document.querySelectorAll('.nav-link')
// const windowPathname = window.location.pathname;

// navLinkEl.forEach(navLinkEls => {
//     if(navLinkEls.href.includes(windowPathname)) {
//         navLinkEls.classList.add('.active');
//     }
// })

// Get all buttons with class="btn" inside the container
const btns = document.getElementsByClassName("btn1");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}