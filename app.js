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

  toggleDiv();
}

function clearArray() {
  inputArray.length = 0;
  document.getElementById("word1").innerHTML = "";
  document.getElementById("word2").innerHTML = "";
  document.getElementById("word3").innerHTML = "";
  toggleDiv();
}

function toggleDiv() {
  let div = document.getElementById("final");
  div.style.display = div.style.display == "none" ? "block" : "none";
}
