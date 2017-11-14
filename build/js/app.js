(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
$(document).ready(function(){
  $("form#to-roman").submit(function(event){
    event.preventDefault();
    var userInput = $("#to-roman-input").val();
    var output = toRoman(userInput);
    if (output === null) {
      $(".output").text("no");
    } else {
      $(".output").text(output);
    }
  });

  $("form#to-decimal").submit(function(event){
    event.preventDefault();
    var userInput = $("#to-decimal-input").val();
    var output = toDecimal(userInput);
    if (output === null) {
      $(".output").text("no");
    } else {
      $(".output").text(output);
    }
  });
});

var toRoman = require('./../js/Roman.js').romanModule;
var toDecimal = require('./../js/Roman.js').decimalModule;

describe('toRoman', function() {
  it('should translate decimal numbers to roman numerals', function() {
    expect(toRoman(82)).toEqual("LXXXII");
  });
});

describe('toDecimal', function() {
  it('should translate roman numerals to decimal', function() {
    expect(toDecimal("LXXXII")).toEqual(82);
  });
});

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

},{"./../js/Roman.js":1}]},{},[2]);
