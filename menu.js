
var y = document.querySelector(".icon");
var z = document.querySelector(".fa-close");
y.addEventListener("click", function() {
  var x = document.getElementById("main-nav");
  if (x.className === "icon-bar") {

      x.className += " responsive";

  } else {
      x.className = "icon-bar";
  }
});
y.addEventListener("click", function() {
  y.style.display="none";
});
y.addEventListener("click", function() {
  z.style.display="block";
});
z.addEventListener("click", function() {
  var x = document.getElementById("main-nav");
  if (x.className === "icon-bar") {

      x.className += " responsive";

  } else {
      x.className = "icon-bar";
  }
});
z.addEventListener("click", function() {
  z.style.display="none";
});
z.addEventListener("click", function() {
  y.style.display="block";
});
