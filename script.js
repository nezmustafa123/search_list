"use strict";

const input = document.getElementById("search");
input.addEventListener("keyup", search);

function search() {
  const inputVal = input.value;
  const li = document.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toLowerCase().includes(inputVal)) {
      li[i].style.display = "";
      //already set to block
    } else {
      li[i].style.display = "none";
    }
  }
}
