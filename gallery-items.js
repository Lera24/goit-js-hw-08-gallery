const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
///1) Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector('.gallery');

const creatingMarkupPictures = images.map (({preview, original, description}) => {
const markupPoint = `<li class='gallery__item'><a class='gallery__link' href='${original}'><img
    class='gallery__image'
    src = '${preview}'
    data-source='${original}'
    alt='${description}'/></a></li>`;
return markupPoint;
})

galleryList.innerHTML = creatingMarkupPictures.join("");

//3) Открытие модального окна по клику на элементе галереи.

const modalWindow = document.querySelector('div.lightbox');

const openModalWindow = function (event) {
 event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
 return;
 };
 return modalWindow.classList.add('is-open');
 };

galleryList.addEventListener('click', openModalWindow);

///2) Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
///4) Подмена значения атрибута src элемента img.lightbox__image.

const bigPicture = document.querySelector('.lightbox__image');

const changeImg = function (event) {
  event.preventDefault();
 if (modalWindow.classList.contains('is-open') && event.target.nodeName === 'IMG') {
    const setImg = event.target.dataset.source;
    return bigPicture.src = setImg;
  };
  return;
 };

galleryList.addEventListener('click', changeImg);

//5) Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//6) Очистка значения атрибута src элемента img.lightbox__image

const crossButton = document.querySelector('[data-action="close-lightbox"]');

const closeModalWindow = function () {
  if (modalWindow.classList.contains('is-open')) {
    bigPicture.src = '';
    return modalWindow.classList.remove('is-open');
  } 
  return;
}

crossButton.addEventListener('click', closeModalWindow);

//6) Очистка значения атрибута src элемента img.lightbox__image
//7) Закрытие модального окна по клику на div.lightbox__overlay.

const clickOverlay = document.querySelector('.lightbox__overlay');
clickOverlay.addEventListener('click', closeModalWindow);

//6) Очистка значения атрибута src элемента img.lightbox__image
// 8) Закрытие модального окна по нажатию клавиши ESC.

const closeModal = function (event) {
  if (event.key === 'Escape') {
    bigPicture.src = '';
    return modalWindow.classList.remove('is-open');
  } 
  return;
}

window.addEventListener('keydown', closeModal);
