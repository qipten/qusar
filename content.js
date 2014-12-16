var adjutant, divNote, isDrag, shiftX, shiftY, window;

window.console.log('qusar work');

divNote = window.document.createElement('div');
divNote.className = 'qusar-note';

//window.document.body.appendChild(divNote);

window.document.body.onclick = function() {
	adjutant.report = {
		message: 'click',
		page: window
	};
};