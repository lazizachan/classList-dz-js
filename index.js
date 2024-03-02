/* task1 */
// let userD = document.querySelector("#userD");
// function validateForm() {
//   let user = document.forms["myForm"]["uName"].value;
//   let result = "";

//   for (let char of user) {
//     if (!(char >= 0 && char <= 9)) {
//       result += char;
//     }
//   }
//   userD.value = result;
//   return false;
// }

/* task2 */
// let red = document.querySelector(".red");
// let yellow = document.querySelector(".yellow");
// let green = document.querySelector(".green");

// red.style.backgroundColor = "red";
// yellow.style.backgroundColor = "white";
// green.style.backgroundColor = "white";

// let i = 0;
// function changeColor() {
//   if (i == 0) {
//     yellow.style.backgroundColor = "yellow";
//     red.style.backgroundColor = "white";
//   } else if (i == 1) {
//     green.style.backgroundColor = "green";
//     yellow.style.backgroundColor = "white";
//   } else if (i == 2) {
//     red.style.backgroundColor = "red";
//     green.style.backgroundColor = "white";
//     i = -1;
//   }

//   i++;
// }

/* task3 */
let selectedBook = null;
function test() {
  if (selectedBook) {
    selectedBook.style.backgroundColor = "white";
  }

  selectedBook = this;
  selectedBook.style.backgroundColor = "orange";
}

const books = document.querySelectorAll(".book");

books.forEach((book) => {
  book.addEventListener("click", test);
});
