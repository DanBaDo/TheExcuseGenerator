/* eslint-disable */
//import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function randomIn(number) {
    return Math.floor(Math.random() * number);
  }

  function getRandomItem(list) {
    return list[randomIn(list.length - 1)];
  }

  function randomPhrase() {
    return `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(
      what
    )} ${getRandomItem(when)}.`;
  }

  document.getElementById("excuse").innerText = randomPhrase();

  console.log("Hello Rigo from the console!");
};
