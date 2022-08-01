import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGalleryEl = document.querySelector('.gallery');

const markupGalleryEl = markupItemsGalleryEl(galleryItems);
listGalleryEl.insertAdjacentHTML('beforeend', markupGalleryEl);

listGalleryEl.addEventListener('click', onImageClick);

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

function onImageClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`);
  instance.show();
}

// console.log(galleryItems);
