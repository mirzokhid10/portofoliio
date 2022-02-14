// Get the modal
var modal = document.getElementById("about");
var myPtmodal = document.getElementById("myPortofolio");
var myContact = document.getElementById("myContact");
var myBlog = document.getElementById("myBlog");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var myPtbtn = document.getElementById("myPtbtn");
var myOpnCnt = document.getElementById("myOpnCnt");
var myOpnBlog = document.getElementById("myOpnBlog");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

myPtbtn.onclick = function () {
  myPtmodal.style.display = "block";
};

myOpnCnt.onclick = function () {
  myContact.style.display = "block";
};

myOpnBlog.onclick = function () {
  myBlog.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

span.onclick = function () {
  myPtmodal.style.display = "none";
};

span.onclick = function () {
  myContact.style.display = "none";
};

span.onclick = function () {
  myBlog.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == myPtmodal) {
    myPtmodal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == myContact) {
    myContact.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == myBlog) {
    myBlog.style.display = "none";
  }
};

/*modal*/
