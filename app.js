let inputArray = [];

function madInput() {
  let adjective = document.getElementById("adjective");
  let noun = document.getElementById("noun");
  let verb = document.getElementById("verb");

  let value1 = adjective.value;
  let value2 = noun.value;
  let value3 = verb.value;

  inputArray.push(value1, value2, value3);
  document.getElementById("word1").innerHTML = value1;
  document.getElementById("word2").innerHTML = value2;
  document.getElementById("word3").innerHTML = value3;

  toggleDivOn();
}

function clearArray() {
  inputArray.length = 0;
  document.getElementById("word1").innerHTML = "";
  document.getElementById("word2").innerHTML = "";
  document.getElementById("word3").innerHTML = "";
  toggleDivOff();
}

function toggleDivOn() {
  let div = document.getElementById("final");
  if ((inputArray.length = 0)) {
    div.style.display = "none";
  } else div.style.display = div.style.display == "none" ? "block" : "block";
}

function toggleDivOff() {
  let div = document.getElementById("final");
  div.style.display = div.style.display == "block" ? "none" : "none";
}
