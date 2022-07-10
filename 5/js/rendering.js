import {generatePosts} from './data.js';

const postItems = generatePosts();
const posts = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');
const postFragment = document.createDocumentFragment();

postItems.forEach(({url, likes, comments}) => {
  const postItem = postTemplate.cloneNode(true);
  postItem.querySelector('.picture__img').src = url;
  postItem.querySelector('.picture__likes').textContent = likes;
  postItem.querySelector('.picture__comments').textContent = comments.length;
  postFragment.append(postItem);
});

posts.append(postFragment);
