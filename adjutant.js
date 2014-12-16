var window;
var adjutant = {
	get report() {},
	set report(order) {
		order.page.console.log(order.message);
	}
};

/*
	СТАНДАРТЫ (0.1)

		ИМЕНОВАНИЕ
			ОБЪЕКТЫ
				1. Состоят из одного существительного
					ok: object
					no: objectSubject
					ok: getter
					no: get
				2. Пишутся с маленькой буквы:
					ok: paris
					no: Moon

		ОФОРМЛЕНИЕ

			ПРОБЕЛЫ
				ФУНКЦИИ
					1. Пробел не ставится между именем функции и скобками
						ok: function()
						no: function ()
					2. Пробел ставится между скобками и блоком фигурных скобок
						ok: function() {}
						no: function(){}
					3. Пробел перед первым аргументом не ставится
						ok: function(argument, argument2)
						ok: function({}, argument)
						no: function( {}, argument)
			СКОБКИ
				ФИГУРНЫЕ
					1. Открывающаяся скобка не переносится на новую строку
						ok: object = {
						}
						no: object =
						{
						}
					2. Закрывающаяся скобка переносится на новую строку, если блок не пуст
						ok: function() {
							action();
						}
						ok: function() {}
						no: function() {
						}

			ТАБУЛЯЦИЯ
				1. В качестве отступов используется табуляция
					ok:<tab>action();
					no:<space>action();
		СТРУКТУРА
*/