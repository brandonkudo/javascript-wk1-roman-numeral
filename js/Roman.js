var conversionMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
var keys = Object.keys(conversionMap);

function toRoman(userInput) {
  if (userInput > 3999 || /[^\d]/.test(userInput)) {
    return null;
  }
  var romanArray = [];
  var output = "";

  for (i = 0; i < keys.length; i++) {
    var currentKey = keys[i];
    while (userInput >= conversionMap[currentKey]) {
        romanArray.push(currentKey);
        userInput -= conversionMap[currentKey];
    }
  }
  output = romanArray.join("");
  return output;
}

function toDecimal(userInput) {
  userInput = userInput.toUpperCase();
  var output = 0;
  if (/^M*(CM)?((D?C*)|(CD)?)(XC)?((L?X*)|(XL)?)(IX)?((V?I*)|(IV)?)$/.test(userInput)) {
    for (i = 0; i < keys.length; i++) {
      var currentKey = keys[i];
      var currentChunk = userInput.substring(0, currentKey.length);

      while (currentKey === currentChunk) {
        userInput = userInput.substring(currentKey.length);
        output += conversionMap[currentKey];
        currentChunk = userInput.substring(0, currentKey.length);
      }
    }
    return output;

  } else {
    return null;
  }
}

exports.romanModule = toRoman;
exports.decimalModule = toDecimal;
