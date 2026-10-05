import 'izitoast/dist/css/iziToast.min.css';
import './css/loader.css';

import iziToast from 'izitoast';
import {
  clearGallery,
  createGallery,
  hideEndMessage,
  hideLoadMoreButton,
  hideLoader,
  showEndMessage,
  showLoadMoreButton,
  showLoader,
} from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';

const searchForm = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');
const PER_PAGE = 15;

let searchQuery = '';
let page = 1;

searchForm.addEventListener('submit', handleSearch);
loadMoreButton.addEventListener('click', handleLoadMore);

async function handleSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  searchQuery = query;
  page = 1;
  clearGallery();
  hideLoadMoreButton();
  hideEndMessage();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

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
    updatePagination(data.totalHits);
  } catch {
    showErrorToast();
  } finally {
    hideLoader();
    event.currentTarget.reset();
  }
}

async function handleLoadMore() {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);
    createGallery(data.hits);
    updatePagination(data.totalHits);
    scrollGallery();
  } catch {
    page -= 1;
    showErrorToast();
    showLoadMoreButton();
  } finally {
    hideLoader();
  }
}

function updatePagination(totalHits) {
  if (page * PER_PAGE >= totalHits) {
    hideLoadMoreButton();
    showEndMessage();
    return;
  }

  hideEndMessage();
  showLoadMoreButton();
}

function scrollGallery() {
  const firstCard = gallery.querySelector('.gallery-item');

  if (!firstCard) {
    return;
  }

  const cardHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function showErrorToast() {
  iziToast.error({
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    position: 'topRight',
  });
}
