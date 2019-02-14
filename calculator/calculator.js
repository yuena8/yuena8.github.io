var inputEquation = document.getElementById("inputarea");
var pastEquation = document.getElementById("equation");


$(document).ready(function() {
            let answer = null;
            let numbers = "1234567890";
          $('button').on('click', function(e){
          			$("h1").append("hhh");
                //let btn_press = e.target.textContent;
								processButton(e.target.textContent);
                
            });
            //resultElement.value = btn_press;
});

function processButton(input){
			//inputEquation.value += input;
      if (input==="="){
					doEvaluation(inputEquation.value);
      }
      else if (input==="C"){
      		inputEquation.value = " ";
      }
      else {
      inputEquation.value += input;
      }

}

function doEvaluation(toCalc){
      pastEquation.textContent = toCalc;
			inputEquation.value = eval(toCalc.toString());

}
