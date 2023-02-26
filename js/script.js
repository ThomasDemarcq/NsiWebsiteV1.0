function greetingAlert() {
  alert("Bienvenu sur mon site, navigué entre les pages et ");
}
greetingAlert()

var pattern = ['N', 'E', 'R', 'D',];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		window.alert('We do a little bit of trolling')
    play();
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);

function play(){
  var audio = new Audio('audio.mp3.mp3');
  audio.play()
}