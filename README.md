# Проектная работа 4,5,6: Место

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


Ссылка на проект gh-pages: https://akatryukhin.github.io/mesto/


