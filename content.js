var divNote, isDrag, shiftX, shiftY, window;

window.console.log('qusar work');

divNote = window.document.createElement('div');
divNote.className = 'note';

divNote.onclick = function()
{
	window.console.log(shiftX + ' ' + shiftY);
};

divNote.onmousedown = function(event)
{
	isDrag = true;
	shiftX = event.offsetX;
	shiftY = event.offsetY;
};

divNote.onmousemove = function(event)
{
	if(isDrag)
	{
		divNote.style.left = event.pageX - shiftX + 'px';
		divNote.style.top = event.pageY - shiftY + 'px';
	}
};

divNote.onmouseout = function()
{
	isDrag = false;
};

divNote.onmouseup = function()
{
	isDrag = false;
};

//window.document.body.appendChild(divNote);