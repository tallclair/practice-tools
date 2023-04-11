const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const voicings = ['4-note A', '4-note B', '3-note A', '3-note B', 'Split A', 'Split B', 'Rootless A', 'Rootless B'];
let previousIndex = -1;

function generateKey() {
	let randomIndex = Math.floor(Math.random() * (keys.length - 1));
    let index = (previousIndex + randomIndex + 1) % keys.length;
	previousIndex = index;

	let key = keys[index];

    let display = key[0];
    if (key.length > 1) {
        display += '<sup>';
        if (key[1] == '#') {
            display += '&sharp;';
        } else {
            display += '&flat;';
        }
        display += '</sup>';
    } else {
        // Invisible superscript to prevent the key jumping vertically.
        display += '<sup>&nbsp;</sup>';
    }
	
	document.getElementById('key').innerHTML = display;

    let voicingIndex = Math.floor(Math.random() * voicings.length)
    let voicing = voicings[voicingIndex];

    document.getElementById('voicing').innerHTML = voicing
}

window.onload = function() {
	generateKey();
};
