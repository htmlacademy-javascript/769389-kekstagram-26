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
export {checkStringLength};
export {getRandomPositiveInteger};
