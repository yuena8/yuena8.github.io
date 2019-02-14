var resultElement = document.getElementById("inputarea");


// listen for button event and take the value of the button and pass for processing
$(document).ready(function() {
          $('button').on('click', function(e){
								processButton(e.target.textContent);
            });
});

// Process the button input
function processButton(input){
			resultElement.value += input;
}
            
