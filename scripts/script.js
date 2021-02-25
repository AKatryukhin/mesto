//попап редактирования профиля
const popupProf = document.querySelector('.popup_type_prof');
//кнопка открытия попапа - редактирования профиля
const popupProfOpenButton = document.querySelector('.profile__edit');
// кнопка закрытия попапа редактирования профиля
const popupProfCloseButton = popupProf.querySelector('.popup__close');
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
//кнопка закрытия попапа - добавления новой карточки
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close');
// кнопка Создать попапа Place
const formElementPlace = popupPlace.querySelector('.popup__form');
// поле ввода "названия места" в форме попап Place
const placeInput = formElementPlace.querySelector('.popup__input_type_name');
//поле ввода "о себе" в форме попап Place
const linkInput = formElementPlace.querySelector('.popup__input_type_descr');
// template-элемент photo
const templatePhoto = document.querySelector('#photo').content;

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
  photoEl.addEventListener('click', handleLike);

  const buttonDel = photoEl.querySelector('.photo__trash');
  buttonDel.addEventListener('click', handleDel);

  const popupImage = document.querySelector('.popup_type_image');
  const popupImg = popupImage.querySelector('.popup__image');
  const popupImgName = popupImage.querySelector('.popup__name-image');
  const popupImageCloseButton = popupImage.querySelector('.popup__close_type_image');

  popupImageCloseButton.addEventListener('click', () => {
    closePopup(popupImage);
  });

  // функция открытия попапа PopupImage с присвоением свойств элемента
  const openPopupImage = () => {
    openPopup(popupImage);
    popupImg.src = item.link;
    popupImg.alt = `Картинка ${item.name}`;
    popupImgName.textContent = item.name;

  };

  itemLink.addEventListener ('click', openPopupImage);

  return photoEl;
  };

// функция для Лайков
const  handleLike = event => {
  const targetEl = event.target;
  if (targetEl.classList.contains('photo__like')) {
  targetEl.classList.toggle('photo__like_type_active');
  }
};

// функция для удаления карточки
const handleDel = event => {
  const targetElement = event.target;
  const targetItem = targetElement.closest('.photo');
  targetItem.remove();
};


//функция открытия попапа
const openPopup = popupEl => {
    popupEl.classList.add('popup_opened');
    popupEl.addEventListener('click', closePopupTarget);
    document.addEventListener('keydown', closeKeydown);
};

// функция закрытия попапа клавишей Escape
const closeKeydown = (evt) => {
  const PopupTypeOpen = document.querySelector('.popup_opened');
  if(evt.key === 'Escape') {
    PopupTypeOpen.classList.remove('popup_opened');
  }
};

//функция закрытия попапа
const closePopup = popupEl => {

    popupEl.classList.remove('popup_opened');
    popupEl.removeEventListener('click', closePopupTarget);
    document.removeEventListener('keydown', closeKeydown);
};

//функция закрытия одного попапа по оверлэй
const closePopupTarget = (evt) => {
  if(evt.target === evt.currentTarget) {
    evt.currentTarget.classList.remove('popup_opened');
  }
};

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


popupProfCloseButton.addEventListener('click', () => {
 closePopup(popupProf);
});

formElementPfof.addEventListener('submit', formSubmitHandlerPopupProf);

popupPlaceOpenButton.addEventListener('click', () => {
  openPopup(popupPlace);
 });

popupPlaceCloseButton.addEventListener('click', () => {
  closePopup(popupPlace);
});

formElementPlace.addEventListener('submit', formSubmitHandlerPopupPlace);

fillGalery ();
