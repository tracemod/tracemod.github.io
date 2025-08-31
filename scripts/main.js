var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/fire.jpg')
		myImage.setAttribute('src', 'images/just5_logo_orange_rgb.jpg');
	else if (mySrc === 'images/just5_logo_orange_rgb.jpg')
		myImage.setAttribute('src', 'images/tabby-cat-sleeping-bob-gibbonsscience-photo-library.jpg');
	else if (mySrc === 'images/tabby-cat-sleeping-bob-gibbonsscience-photo-library.jpg')
		myImage.setAttribute('src', 'images/landscape.jpg');
	else if (mySrc === 'images/landscape.jpg')
		myImage.setAttribute('src', 'images/medusa.jpg');
	else if (mySrc === 'images/medusa.jpg')
		myImage.setAttribute('src', 'images/todd.jpg');	
	else
		myImage.setAttribute('src', 'images/fire.jpg');	
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please, enter your name');
	if (myName == '')	
		myHeading.innerHTML = 'Hello!';
	else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Hello, ' + myName + ' !';
	}
}

if (!localStorage.getItem('name'))
	setUserName();
else if (name != '') {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Hello, ' + storedName + ' !';
}
else 
	myHeading.innerHTML = 'Hello!';


myButton.onclick = function() { 
	setUserName();
}
