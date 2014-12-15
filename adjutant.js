var Adjutant =
{
	event:
	{
		get Manager() {},
		set Manager(order)
		{
			for(var key in order.events)
			{
				order.object[key] = order.events[key];
			}
		}
	}
};