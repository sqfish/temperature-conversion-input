/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/

// This function should determine which conversion should
// happen based on which radio button is selected.

// This will actually return an array containing both of the radio buttons
// so you will need to look at each item in the array and see if the 'checked'
// property is true (sample code provided)

var toCelsius = function (tempF) {
  var tempC = ((tempF - 32) * 5 / 9).toFixed(2);
  return tempC;
}

var toFahrenheit = function (tempC) {
  var tempF = ((tempC * 9 / 5) + 32).toFixed(2);
  return tempF;
}


function determineConverter() {
  event.preventDefault();
  var inputTemp = document.getElementById("inputNumber").value;
  if (inputTemp === "") { // If input value is invalid, end execution
    return;
  }

  var $optionChosen = $(":radio");
  // var optionChosen = document.getElementsByName("conversion_type"); // HTMLCollection of radio buttons
  var outputTemp;
  var string = "";
  for (i in optionChosen) {
    currentElement = optionChosen[i];
    if (currentElement.checked && currentElement.value === "celsius") {
      outputTemp = toCelsius(inputTemp);
      string = inputTemp + "&#8457; = " + outputTemp + "&#8451;";
    } else if (currentElement.checked && currentElement.value === "fahrenheit") {
      outputTemp = toFahrenheit(inputTemp);
      string = inputTemp + "&#8451; = " + outputTemp + "&#8457;";
    }
  }
  document.getElementById("output").innerHTML = string;
}

// Get a reference to the button element in the DOM
// var button = document.getElementById("converter");
// Assign a function to be executed when the button is clicked
// button.onclick = determineConverter;

// Alternative JQuery
var $button = $("#converter");
$button.click(function(){
  determineConverter();
});

