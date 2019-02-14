var inputEquation = document.getElementById("inputarea");
var pastEquation = document.getElementById("equation");


$(document).ready(function() {
  $('button').on('click', function(e){
    $("h1").append("hhh");
      //let btn_press = e.target.textContent;
			processButton(e.target.textContent);

    });

});

function processButton(input){
  if (input==="="){
		doEvaluation(inputEquation.value);
  }
  else if (input==="C"){
    inputEquation.value = "";
    pastEquation.textContent = "";
  }
  else {
    inputEquation.value += input;
  }

}

function doEvaluation(toCalc){
  pastEquation.textContent = toCalc;
	inputEquation.value = eval(toCalc.toString());

}
