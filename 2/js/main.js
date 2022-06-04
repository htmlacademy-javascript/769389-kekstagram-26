const maxLenghtComment = 140;

// Функция для проверки максимальной длины строки
function isCommentValid(text) {
  const lenghtText = text.length;
  if (lenghtText > maxLenghtComment) {
    return false;
  }
  return true;
}
isCommentValid('comment text');

// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNumber(min, max) {
  if (max<min || Math.sign(min) === -1) {
    return false;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(0, 900);
