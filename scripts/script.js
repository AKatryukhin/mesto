//попап редактирования профиля
const popupProf = document.querySelector('.popup_type_prof');
//кнопка открытия попапа - редактирования профиля
const popupProfOpenButton = document.querySelector('.profile__edit');
// форма попапа редактирования профиля
const formElementPfof = popupProf.querySelector('.popup__form');
// поле ввода "имени" в форме попап Prof
const nameInput = formElementPfof.querySelector('.popup__input_type_name');
//поле ввода "о себе" в форме попап Prof
const jobInput = formElementPfof.querySelector('.popup__input_type_descr');
// поле для отображения имени в профиле
const profileName = document.querySelector('.profile__name');
// поле для отображения "о себе" в профиле
const profileJob = document.querySelector('.profile__job');
// секция galery
const galery = document.querySelector('.galery');
//попап добавления новой карточки
const popupPlace = document.querySelector('.popup_type_place');
//кнопка открытия попапа - добавления новой карточки
const popupPlaceOpenButton = document.querySelector('.profile__add');
// кнопка Создать попапа Place
const formElementPlace = popupPlace.querySelector('.popup__form');
// поле ввода "названия места" в форме попап Place
const placeInput = formElementPlace.querySelector('.popup__input_type_name');
//поле ввода "о себе" в форме попап Place
const linkInput = formElementPlace.querySelector('.popup__input_type_descr');
// template-элемент photo
const templatePhoto = document.querySelector('#photo').content;
const popupImage = document.querySelector('.popup_type_image');
const popupImg = popupImage.querySelector('.popup__image');
const popupImgName = popupImage.querySelector('.popup__name-image');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// функция для преобразования заданного массива и стартового заполнения страницы карточками
const fillGalery = () => {
  const newArr = initialCards.map(createPhotoEl);
  galery.append(...newArr);
};

// функция для создания новой карточки
const createPhotoEl = item => {

  const photoEl = templatePhoto.querySelector('.photo').cloneNode(true);
  const itemLink = photoEl.querySelector('.photo__image');
  itemLink.src = item.link;
  itemLink.alt = `Картинка ${item.name}`;
  const itemName = photoEl.querySelector('.photo__name');
  itemName.textContent = item.name;

  const buttonLike = photoEl.querySelector('.photo__like');
  buttonLike.addEventListener('click', handleLike);

  const buttonDel = photoEl.querySelector('.photo__trash');
  buttonDel.addEventListener('click', handleDel);

  itemLink.addEventListener ('click', () => {
    openPopupImage(item);
  });

  return photoEl;
  };

  // функция открытия попапа PopupImage с присвоением свойств элемента
const openPopupImage = (item) => {
  openPopup(popupImage);
  popupImg.src = item.link;
  popupImg.alt = `Картинка ${item.name}`;
  popupImgName.textContent = item.name;

};

// функция для Лайков
const  handleLike = event => {
  const targetEl = event.target;
   targetEl.classList.toggle('photo__like_type_active');

};

// функция для удаления карточки
const handleDel = event => {
  const targetElement = event.target;
  const targetItem = targetElement.closest('.photo');
  targetItem.remove();
};

// функция закрытия попапа клавишей Escape
const closeByEscape = (evt) => {
  if(evt.key === 'Escape') {
    const popupTypeOpened = document.querySelector('.popup_opened');
    popupTypeOpened.classList.remove('popup_opened');
  }
};

//функция открытия попапа
const openPopup = popupEl => {
    popupEl.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
};

//функция закрытия попапа
const closePopup = popupEl => {

    popupEl.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
};

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup);
        }
    });
});


//функця для занесения введенных в поля ввода формы данных для отображения в профиле
const formSubmitHandlerPopupProf = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProf);
};

// функция для добавления карточки
const addNewPlace = () => {
    const inputPlace = placeInput.value;
    const inputLink = linkInput.value;
    const newPlace = createPhotoEl({ name: inputPlace, link: inputLink});
    galery.prepend(newPlace);
    placeInput.value = '';
    linkInput.value = '';
};

//функция добавления новой карточки и закрытия попапа Place
const formSubmitHandlerPopupPlace = (evt) => {
    evt.preventDefault();
    addNewPlace();
    closePopup(popupPlace);
  };

//слушатель с функцией открытия попапа - редактирования профиля и присваивания инпутам значений  из профайла
popupProfOpenButton.addEventListener('click', () => {
  openPopup(popupProf);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

formElementPfof.addEventListener('submit', formSubmitHandlerPopupProf);

popupPlaceOpenButton.addEventListener('click', () => {
  openPopup(popupPlace);
 });

formElementPlace.addEventListener('submit', formSubmitHandlerPopupPlace);

fillGalery ();
