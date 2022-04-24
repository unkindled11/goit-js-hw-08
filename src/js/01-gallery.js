// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery")


const items = galleryItems
    .map(element =>
    `<a class="gallery__item" href="${element.original}">
        <img 
        class="gallery__image"
         src="${element.preview}" 
         alt="${element.description}" />
    </a>`).join("");
    
gallery.insertAdjacentHTML("afterbegin", items)
    

let simpleLbGallery = new SimpleLightbox('.gallery a',{captionsData: `alt`, captionDelay:250});


console.log(galleryItems);
