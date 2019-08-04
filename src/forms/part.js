const template = require("./part.pug");

window.addEventListener("load", function() {
  document.querySelector("main").innerHTML = template();
});
