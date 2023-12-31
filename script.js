/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdownMenu() {
  let x = document.getElementById("menuDropdown");
  if (x.style.display === "" || x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

document.body.addEventListener("click", function (event) {
  let x = document.getElementById("menuDropdown");
  let button = document.getElementsByClassName("menu-button")[0]; // button untuk toggle menuDropDown
  if (x.style.display === "flex" && !x.contains(event.target) && !button.contains(event.target)) {
    x.style.display = "";
  }
});


function toggleHamburgerMenu() {
  let icons = document.querySelectorAll('.icon');
  let x = document.getElementsByClassName("hamburger-menu-lists")[0];
  if (x.style.display === "" || x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  icons.forEach (icon => {  
    icon.classList.toggle("open");
  })

  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("desktop-navbar").style.top = "0";
    } else {
      document.getElementById("desktop-navbar").style.top = "-15vh";
    }
    prevScrollpos = currentScrollPos;
  }