let data = window
  .prompt("Provide age of member and handicap after comma")
  .split(",");

let age = data[0];
let handicap = data[1];

if (age >= 55 && handicap > 7) {
  window.alert("Senior");
} else {
  window.alert("Open");
}
