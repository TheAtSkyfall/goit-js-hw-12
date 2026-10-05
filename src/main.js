import 'izitoast/dist/css/iziToast.min.css';
import './css/loader.css';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}
