// Get button element by it's ID
let btn = document.querySelector('#calculate');

// Binding a 'click' event to the button.
btn.addEventListener ('click', function () {

    // getting input elements value by their ID
    let num1 = parseFloat(document.querySelector('#num1').value );
    let num2 = parseFloat(document.querySelector('#num2').value );
            
    // calculation
	let answer = num1 * num2;;
    
    //getting show result
	rlt = document.querySelector('p.answer');
	
	// Set content of HTML element.
	rlt.innerHTML = 'R'+answer;
});

