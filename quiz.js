var user = {}
var responses = []

function question1() {
    var name = prompt ('what is your name?')
    user.name = name
    responses.push(name); 
}

question1();

function question2() {

	var student = prompt ('Are you a student?')
	user.student = student
		if (student.toLowerCase() === 'yes') {
			student = true
		} else if (student.toLowerCase() === 'no') {
			student = false
		} else {
			alert('Please answer Yes or No');
			return question2();
		}

	responses.push(status); 
}

question2();

function question3() {
	var inventor = prompt('Who was the inventor of JavaScript?: Eich, Ritchie or Stroustup?');
	user.inventor = inventor
	inventor = inventor.toLowerCase();
	switch (inventor) {
  	case 'eich':
    alert('That is the correct answer!');
  	break;

  	case 'ritchie':
    alert('That answer is incorrect.');
  	break;
  
  	case 'stroustup':
    alert('That answer is incorrect.');
  	break;

  	default:
    alert('I don\'t understand your answer: ' + inventor);
  	break;
  	return question3();
	}
	responses.push(inventor); 
}

question3();

function question4() {
	var platform = prompt('Fill in the missing word: JavaScript is the language of the _ _ _ .');
	user.platform = platform
	platform = platform.toLowerCase();
	if (platform === 'web') {
	alert ('That is the correct answer!');
	} else {
	alert ('That answer is incorrect.');
	}
	responses.push(platform); 
}

question4();


function question5() {
 var years = prompt('How many years of programming experience do you have? Please enter the input in digits.');
 user.years = years

 if (years < '2') {
  alert('You are a beginner! Welcome!'); 
}
else if (years < '5') {
  alert('Congratulations, you are well on your way to being a senior programmer'); 
}
else if  (years >= '5') {
  alert('You are a senior programmer!'); 
}
else {
	alert('Your answer is invalid. Please enter the information in digits.');
	return question5();
}
responses.push(years); 
}

question5();





