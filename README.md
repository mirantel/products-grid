My Grunt minimal set for Front-end
=============
For generic frontend development. Mostly small to medium projects, and without some heavy JS.

`src` - source of the project, where all the development should happen
```
	src
	- img - images
	- scss - *.scss or *.sass files
	- js - *.js
	- _*.html - part of html
```

`production` - code we are sending to client. All preprocessors compiled, css-js-images concatenated and minified.

How to run it
-------------
- Download [NodeJS](http://nodejs.org/)
- At the NodeJS command prompt, write:

```
	npm install grunt-cli -g
	npm install
	grunt
```


*****

Минимальный Grunt набор для верстки
=============
Может использоваться для сборки простых и средних проектов, без сложного JS.


Возможности:
-------------
 - Для *CSS*
 	- Sass/Scss  https://github.com/gruntjs/grunt-contrib-compass
 	- Минимизирование CSS  https://github.com/t32k/grunt-csso
 - Для *HTML*
 	- Include частей из других файлов  https://github.com/alanshaw/grunt-include-replace
 - Для *JS*
 	- ничего не использовано, в production копируется js без изменений.

Grunt отдельно следит за изменениями в sass/js/html и запускает процессы сборки только для нужного типа файлов.

Структура каталогов:
-------------

`src` - папка с исходным кодом
```
	src
	- img - папка с картинками
	- scss - папка с *.scss или *.sass файлами
	- js - папка с *.js
	- _*.html - части html-документов имеют префикс _
	- *.html - html-документы
```

`production` - папка с полученным кодом.


Первый запуск:
-------------
 - Загрузиcть [NodeJS](http://nodejs.org/)
 - В командной строке NodeJS ввести:
`npm install grunt-cli -g`

 - В командной строке перейти  в директорию с grunfile.js. Например так: `cd /d d:\same-project` , далее загрузить все плагины, указанные в grunfile:
`npm install`

 - Запустить Grunt:
`grunt`

###Замечания:###
 - Если у Вас не установлен Compass, его надо установить. Подробней: https://github.com/gruntjs/grunt-contrib-compass. При установки Ruby на Windows галочкой отметить добавление PATH, иначе Grunt может не видеть Ruby.

Последующие запуски:
-------------
 - Перейти в командной строке в директорию с grunfile.js.
 - Запустить Grunt:
`grunt`


Grunt release
-------------
Для полной сборки, удаления лишнего и минимизирования CSS надо ввести в командной строке:
`grunt release`
