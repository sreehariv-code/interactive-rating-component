var rating_btns = document.querySelectorAll(".rating");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var submit_btn = document.querySelector(".submit");
var preview = document.getElementById("print");
var text = "";
// console.log(preview.innerHTML);
var rating = 0;
submit_btn.onclick = handleSubmit;
rating_btns.forEach((btn) => {
  //   btn.classList.remove("active");
  btn.onclick = handleClick;
});

function handleClick(e) {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  //   current[0].className = current[0].className.replace(" active");
  this.className += " active";
  rating = e.target.textContent;
  console.log(rating);
  return rating;
}
console.log(rating);

function handleSubmit(e) {
  console.log(rating);
  if (rating) {
    left.classList.add("hide");
    right.classList.remove("hide");
  }
  text = "You selected " + rating + " out of " + rating_btns.length;
  preview.textContent = text;
}
