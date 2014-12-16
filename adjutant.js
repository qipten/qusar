var window;
var adjutant = {
	get report() {},
	set report(order) {
		order.page.console.log(order.message);
	}
};