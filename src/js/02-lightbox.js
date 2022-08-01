import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGalleryEl = document.querySelector('.gallery');

const markupGalleryEl = markupItemsGalleryEl(galleryItems);
listGalleryEl.insertAdjacentHTML('beforeend', markupGalleryEl);

function markupItemsGalleryEl(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// console.log(galleryItems);
