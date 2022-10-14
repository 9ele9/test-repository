document.getElementById("cityField").addEventListener("keyup", function(event) {
  event.preventDefault();
  const value = "Keyup";
  const txtHint = document.getElementById("txtHint");
  txtHint.textContent = "";
  txtHint.appendChild(document.createTextNode(value));
});

document.getElementById("cityField").addEventListener("keyup", function(event) {
  event.preventDefault();
  const value = document.getElementById("cityField").value;
  const txtHint = document.getElementById("txtHint");
  txtHint.textContent = "";
  txtHint.appendChild(document.createTextNode(value));
});