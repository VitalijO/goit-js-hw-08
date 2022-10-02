// Add imports above this line
import { galleryItems } from './gallery-items.js';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"


const galleryEls = document.querySelector('.gallery');
const markupGaleryEls = createMarkupGalleryEls(galleryItems) 
galleryEls.insertAdjacentHTML('beforeend', markupGaleryEls)

function createMarkupGalleryEls(elements) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item"
        href= "${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>`
    })
    .join('');
}


const lightbox = new SimpleLightbox('.gallery__item', {
    fadeSpeed: 250,
    captionsData:"alt",
});
