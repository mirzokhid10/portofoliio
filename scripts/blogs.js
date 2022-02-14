// Get the modal
var postA = document.getElementById("blogPostA");

// Get the button that opens the modal
var btnPostA = document.getElementById("btnPostA");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("blogPostCls")[0];

// When the user clicks the button, open the modal
btnPostA.onclick = function () {
  postA.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  postA.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == postA) {
    postA.style.display = "none";
  }
};
