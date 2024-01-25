let inputArray = [];

function madInput() {
  inputArray = [];
  let word1 = document.getElementById("adjective").value;
  let word2 = document.getElementById("noun").value;
  let word3 = document.getElementById("verb").value;

  if (word1.length > 0 && word2.length > 0 && word3.length > 0) {
    inputArray.push(word1, word2, word3);
    generateMadLib(inputArray);
  } else {
    alert("Your LIB isn't MAD enough!");
  }

  //toggleDivOn();
}

function generateMadLib(inputArray) {
  if (inputArray.length > 0) {
    let madLibString =
      "I went to the {0} store to buy some {1} so I could {2} with it";
    for (let i = 0; i < inputArray.length; i++) {
      madLibString = madLibString.replace("{" + i + "}", inputArray[i]);
    }
    document.getElementById("final").innerHTML = madLibString;
    console.log(inputArray);
  }
}

function clearArray() {
  inputArray.length = 0;
}
