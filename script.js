//your JS code here. If required.
var counterElement = document.getElementById('counter');
var button = document.getElementById('incrementBtn');

var counter = 0;
counterElement.innerHTML = counter;

button.addEventListener('click', function() {
	counter++;
	alert(counter - 1);
	counterElement.innerHTML = counter;
	
});
