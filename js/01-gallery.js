import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGalleryEl = document.querySelector('.gallery');

const markupGalleryEl = markupItemsGalleryEl(galleryItems);
listGalleryEl.insertAdjacentHTML('beforeend', markupGalleryEl);

listGalleryEl.addEventListener('click', onImageClickOpen);

function markupItemsGalleryEl(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join('');
}

listGalleryEl.addEventListener('click', onImageClickOpen);

function onImageClickOpen(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscImagePress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscImagePress);
      },
    },
  );

  function onEscImagePress(event) {
    console.log(event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
  }
  instance.show();
}

// console.log(galleryItems);
// =======================================альтернативний варіант вирішення=============================

// listGalleryEl.addEventListener('click', onImageClickOpen);

// const instance = basicLightbox.create(
//   `
//     <img class="modal-img" src="">`,
//   {
//     onShow: instance => {
//       window.addEventListener('keydown', onEscImagePress);
//     },
//     onClose: instance => {
//       window.removeEventListener('keydown', onEscImagePress);
//     },
//   },
// );

// function onImageClickOpen(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   instance.element().querySelector('img').src = event.target.dataset.source;
//   instance.show();
// }

// function onEscImagePress(event) {
//   console.log(event.code);
//   if (event.code === 'Escape') {
//     instance.close();
//   }
// }
