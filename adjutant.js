var window;
var adjutant =
{
	get report()
	{
		
	},
	set report(order)
	{
		order.page.console.log(order.message);
	}
};

/*
	СТАНДАРТЫ (0.2)
		ИМЕНОВАНИЕ
			МЕТОДЫ
				1. Пишутся в нижнем регистре
					ok: log()
					no: getMoney()
				2. Состоят из одного слова
					ok: move()
					no: just_do_it()
					ok: just:
						{
							do:
							{
								it: function()
								{
								}
							}
						}
						just.do.it()
			ОБЪЕКТЫ
				1. Пишутся в нижнем регистре:
					ok: paris
					no: Moon
				2. Состоят из одного существительного
					ok: object
					no: objectSubject
					ok: getter
					no: get
			ПАРАМЕТРЫ
				КОНСТАНТЫ
					1. Пишутся в верхнем регистре
						ok: X: 10
						no: x: 0
					2. Могут использоваться составные слова с разделителем _
						ok: MAX_Y: 123
						no: MAXY: 322
				ПЕРЕМЕННЫЕ
					1. Пишутся в нижнем регистре
						ok: y: 1
						no: Y: 2
					2. Могут использоваться составные слова с разделителем _
						ok: max_x: 321
						no: mAxY: 228
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
					1. Фигурные скобки всегда переносятся на новую строку
						ok: object =
						{
							if()
							{
							}
							else
							{
							}
						}
						no: object = {
							if(){
							}else{
							}
						}
			ТАБУЛЯЦИЯ
				1. В качестве отступов используется табуляция
					ok:<tab>action();
					no:<space>action();
		СТРУКТУРА
*/