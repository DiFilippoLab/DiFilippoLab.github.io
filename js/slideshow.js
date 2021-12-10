var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("research-automated-thumbnail");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  console.log(x)
  console.log(slideIndex)
  console.log(x[slideIndex-1])
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
  console.log("Change");

}


