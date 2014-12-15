var Adjutant, divNote, isDrag, shiftX, shiftY, window;

window.console.log('qusar work');

divNote = window.document.createElement('div');
divNote.className = 'note';

Adjutant.event.Manager =
{
	events:
	{
		onclick: function()
		{
			window.console.log(shiftX + ' ' + shiftY);
		},
		ondblclick: function()
		{
			divNote.style.display = 'none';
		},
		onmousedown: function(event)
		{
			isDrag = true;
			shiftX = event.offsetX;
			shiftY = event.offsetY;
		},
		onmousemove: function(event)
		{
			if(isDrag)
			{
				divNote.style.left = event.pageX - shiftX + 'px';
				divNote.style.top = event.pageY - shiftY + 'px';
			}
		},
		onmouseout: function()
		{
			isDrag = false;
		},
		onmouseup: function()
		{
			isDrag = false;
		}
	},
	object: divNote
};

window.document.body.appendChild(divNote);