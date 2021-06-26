# Проектная работа "Место"

### Описание
Страница создана по макету в Figma, адаптивна для desctop и mobile.
Для выравнивания элементов в сетке использовался Flexbox. Блок с фото создан с применением Grid Layout.
Создана форма в виде popup для ввода данных. Реазилована возможность открытия.закрытия.сохранения данных по click.
При загрузке на странице отображается 6 карточек, которые добавляются из заданного массива при помощи функций в JavaScript.
Создана форма в виде popup для добавления новой карточки. Реазилована возможность открытия,закрытия попап, а также сохранения введенных данных по click.
Реализована возможность лайкнуть карточки. Если лайкнуть карточку, сердечко поменяет цвет.
Реализована возможность удалять карточки при клике на эту иконку.
Создан попап для просмотра картинок с увеличением практически на полный экран (75vw, 75vh). Попап открывается нажатием на картинку и закрывается кликом на крестик.
Реализована возможность закрытия модальных окон нашатием на overlay и нашатием на клавишу Esc.
Реализовано плавное открытие и закрытие попапов: для этого вместо {display: none} попапы спрятаны с помощью /*visibility/opacity*/. Попапы проявляются из прозрачности и уходят в неё при закрытии.
Добавлена функция enableValidation, которая включает валидацию форм, принимает на вход объект параметров, а затем передаёт параметры вложенным функциям. Код валидации вынесен в отдельный файл validate.js
В 7 работе произведен рефакторинг кода. В вместо ранее мспользуемых функций созданы классы Card и FormValidation с соответствующими методами.
Код объектно-ориентирован.
Каждый класс (Card, FormValidator) описан в отдельном JS-файле и импортирован в index.js.

Экземпляр класса Card создаётся для каждой карточки. Класс Card:
- принимает в конструктор ссылки на изображение и текст;
- принимает в конструктор селектор для template-элемента с шаблоном разметки;
- обладает приватными методами, которые устанавливают слушатели событий, обрабатывают клики, подготавливают карточку к публикации;
- обладает публичным методом, который возвращает готовую разметку, с установленными слушателями событий.

Экземпляр класса FormValidator создаётся для каждой проверяемой формы. Этот класс:
- принимает в конструктор объект настроек с классами формы;
- принимает в конструктор ссылку на HTML-элемент проверяемой формы;
- содержит приватные методы для обработки формы;
- содержит публичный метод enableValidation — который вызывается после создания экземпляра класса.

Каждый класс выполняет строго одну задачу. Всё, что относится к решению этой задачи, находится в классе. Ни один другой класс к решению этой задачи не относится.

В 8 проектной работе продолжен рефакторинг кода. Созданы ещё несколько классов и настроены связи между ними:
Section, Popup, PopupWithImage, PopupWithForm, UserInfo.

Настроена сборка Webpack.

В 9 проектной работе произведено подключение проекта Mesto к серверу при помощи запросов: GET, POST, PUT, PATCH, DELETE. Произведен рефакторинг кода во всех классах, а также созданы новые классы, необходимые в проекте.


Ссылка на проект gh-pages: https://akatryukhin.github.io/mesto/index.html


