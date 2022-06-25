const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Люблю делать фото',
  'Вечеринка в разгаре',
  'Как-то раз попал себе вилкой в глаз',
  'Один лайк и я сожру это...',
  'Думаю о высоком',
  'Зачем я это фотографировал',
];

const NAMES = [
  'Саша',
  'Маша',
  'Ксения',
  'Наташа',
  'Петр',
  'Серафим',
  'Давид',
];


// Функция для проверки максимальной длины строки
function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('comment text',10);

// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger (10, 100);

function getRandomArrayItem (array) {
  const index = getRandomPositiveInteger(0, array.length-1);
  return array[index];
}

function generateRandomMessage () {
  const messageCount = getRandomPositiveInteger(1, 2);
  if (messageCount === 1) {
    return getRandomArrayItem(MESSAGE);
  } else {
    const first = getRandomArrayItem(MESSAGE);
    let second;
    do {
      second = getRandomArrayItem(MESSAGE);
    } while (first === second);
    return first + ' ' + second;
  }
}

function generateComment (id) {
  return {
    id: id,
    avatar: `img/avatar-${  getRandomPositiveInteger(1,6)  }.svg`,
    message: generateRandomMessage(),
    name: getRandomArrayItem(NAMES)
  };
}

function isCommentIdRepeats (array, id) {
  for (const comment of array) {
    if (comment.id === id) {
      return true;
    }
  }
  return false;
}

function generatePost (id) {
  const maxCommentsCount = 10;
  const commentCount = getRandomPositiveInteger (1, maxCommentsCount);
  const comments = [];
  const maxPostCommentId = id * maxCommentsCount;
  const minPostCommentId = maxPostCommentId - (maxCommentsCount - 1);

  for(let i = 1; i <= commentCount; i++ ) {
    let commentId;

    do {
      commentId = getRandomPositiveInteger(minPostCommentId, maxPostCommentId);
    } while (isCommentIdRepeats(comments, commentId));
    comments.push(generateComment (commentId));
  }
  return {
    id: id,
    url: `photos/${  id  }.jpg`,
    description: getRandomArrayItem(DESCRIPTION),
    likes: getRandomPositiveInteger(15,200),
    comments: comments
  };
}

function generatePosts (countPosts) {
  const posts = [];
  for(let i = 1; i <= countPosts; i++ ) {
    posts.push(generatePost (i));
  }
  return posts;
}

generatePosts();
