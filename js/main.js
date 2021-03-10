let DATA_ADS = {
  AVATARS: 8,
  TITLES: ['Одна комната', 'Одгокомнатная квартира', 'Двухкомнатная квартира', 'Трехкомнатная квартира', 'Пятикомнатная квартира', 'Одноэтажный дом', 'Двухэтажный дом', 'Трехэтажный дом'],
  MIN_LOCATION_X: 35.65000,
  MAX_LOCATION_X: 35.70000,
  MIN_LOCATION_Y: 139.70000,
  MAX_LOCATION_Y: 139.80000,
  MIN_PRICE: 1000,
  MAX_PRICE: 1000000,
  TYPES: ['palace', 'flat', 'house', 'bungalo'],
  MIN_ROOMS: 1,
  MAX_ROOMS: 5,
  MIN_GUEST: 1,
  MAX_GUEST: 20,
  CHECKING: ['12:00', '13:00', '14:00'],
  CHECKOUT: ['12:00', '13:00', '14:00'],
  FEATURES: ['wifi', 'dishwasher', 'parking', 'elevator', 'conditioner'],
  DESCRIPTION: ['С видом на реку', 'С большой кухней', 'С балконом', 'С двумя санузлами', 'С одноместными кроватями', 'С двухместными краватями'],
  PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
}

// Функция возвращающая случайное число в диапазоне
const getRandomNumber= function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || min < 0 || max < 0) {
    throw new Error('Invalid Variable value');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// Функция возвращающая случайное число в диапазоне с плавающей точкой
const getRandomFloatingPointNumber = function (min, max, numberOfDecimal = 5) {
  if (max > min && min >= 0) {
    return +((Math.random() * (max - min) + min).toFixed(numberOfDecimal));
  }
  throw new Error('Invalid Variable value');
}

// Функция, возвращающая случайный элемемент массива
function getRandomElement(array) {
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
  }
  let randomElement = array[randomIndex];
  return randomElement;
}

// Функция, создающая массив произвольной длины
function getArrayLength(array) {
  let clone = array.slice();
  clone.length = getRandomNumber(1, array.length);
  return clone;
}

// Функция, возвращающая новый массив из старого в случайном порядке
function shuffleArray(array) {
  let mixedArray = array.slice();
  for (let i = mixedArray.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let tempValue = mixedArray[i];
    mixedArray[i] = mixedArray[randomIndex];
    mixedArray[randomIndex] = tempValue;
  }
  return mixedArray;
}

// Генерируем массив аватарок
function generateAvatars() {
  let listAvatars = [];
  for (let i = 1; i < DATA_ADS.AVATARS + 1; i++) {
    if (i < 10) {
      i = '0' + i;
    }
    let avatars = 'img/avatars/user0' + i + '.png';
    listAvatars.push(avatars);
  }
  return listAvatars;
}

function generateAds() {
  let ads = [];
  let userAvatars = shuffleArray(generateAvatars());
  let adHeadlines = shuffleArray(DATA_ADS.TITLES);

  for (let i = 0; i < DATA_ADS.COUNT_USERS; i++) {
    let locationX = getRandomFloatingPointNumber(DATA_ADS.MIN_LOCATION_X, DATA_ADS.MAX_LOCATION_X);
    let locationY = getRandomFloatingPointNumber(DATA_ADS.MIN_LOCATION_Y, DATA_ADS.MAX_LOCATION_Y);

    ads.push({
      'author': {
        'avatar': userAvatars[i],                           
      },
      'offer': {
        'title': adHeadlines[i],
        'adress': (locationX + ', ' + locationY),
        'price': getRandomNumber(DATA_ADS.MAX_PRICE, DATA_ADS.MAX_PRICE),
        'type': getRandomElement(DATA_ADS.TYPES),
        'rooms': getRandomNumber(DATA_ADS.MIN_ROOMS, DATA_ADS.MAX_ROOMS),
        'guests': getRandomNumber(DATA_ADS.MIN_GUEST, DATA_ADS.MAX_GUEST),
        'checkin': getRandomElement(DATA_ADS.CHECKING),
        'checkout': getRandomElement(DATA_ADS.CHECKOUT),
        'features': getArrayLength(DATA_ADS.FEATURES),
        'description': getRandomElement(DATA_ADS.DESCRIPTION),
        'photos': getArrayLength(DATA_ADS.PHOTOS),
      },
      'location': {
        'x': locationX,
        'y': locationY,
      },
    });
  }
  return ads;
}
