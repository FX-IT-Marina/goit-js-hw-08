// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);

function createGalleryContainerMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
            <a class="gallery__link" href= "${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
            </a>
            </li>
        `;
    })
    .join('');
}
const itemMarkup = createGalleryContainerMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);
console.log(galleryItems);

// Library SimpleLightbox

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
