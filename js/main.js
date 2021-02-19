const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max || min < 0 || max < 0) {
    throw new Error('Invalid Variable value');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const getRandomMapCoordination = function (min, max, numberOfDecimal = 5) {
  if (max > min && min >= 0) {
    return +((Math.random() * (max - min) + min).toFixed(numberOfDecimal));
  }

  throw new Error('Invalid Variable value');
}

const TOTAL_USERS = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
// Не понимаю как {{x}} привести в необходимое состояние. не перечисляя все значения массива.

const ADRESS = ['location.x', 'location.y']; // Не понимаю через массив или через объект нужно сделать

const PRICE = {
  min: 500,
  max: 100000,
}; // Можно сдделать проще через getRandomIntInclusive(500, 100000), но тогда прийдется выносить в последнюю генерацию без getRandomIntInclusive, не знаю можно ли так сделать, т.к. не будет единообразия

const assignTypes = () => {
  const TYPES = ['palace', 'flat', 'house', 'bungalow'];
  const types = [];
  let typesLen = TYPES.length;

  for (let i=getRandomIntInclusive(0, typesLen); i < typesLen; i+=getRandomIntInclusive(1, typesLen)) {
    types.push(TYPES[i])
  }

  return types;
}

const ROOMS = {
  min: 1,
  max: 10,
};

const GUESTS = {
  min: 1,
  max: 20,
};

const assignCheckins = () => {
  const CHECKING = ['12:00', '13:00', '14:00'];
  const checkins = [];
  let checkinsLen = CHECKING.length;

  for (let i=getRandomIntInclusive(0, checkinsLen); i < checkinsLen; i+=getRandomIntInclusive(1, checkinsLen)) {
    checkins.push(CHECKING[i])
  }

  return checkins;
}

const assignFeatures = () => {
  const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const features = [];
  let featuresLen = FEATURES.length;

  for (let i=getRandomIntInclusive(0, featuresLen); i < featuresLen; i+=getRandomIntInclusive(1, featuresLen)) {
    features.push(FEATURES[i])
  }

  return features;
}

const assignPhotos = () => {
  const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  const photos = [];
  let photosLen = PHOTOS.length;

  for (let i=getRandomIntInclusive(0, photosLen); i < photosLen; i+=getRandomIntInclusive(1, photosLen)) {
    photos.push(PHOTOS[i])
  }

  return photos;
}

const LOCATIONS = {
  x: getRandomMapCoordination(35.65000, 35.70000),
  y: getRandomMapCoordination(139.70000, 139.80000),
}


// Думаю исходник должен выглядеть именно так по условиям дз. Пока как черновик.
/*
const generatingRandomArrayData = () => {
  return {
    author {
      avatar: 'img/avatars/user0${getRandomIntInclusive(1, TOTAL_USERS)}.png',
    },
    offer {
      title: 'Заголовок',
      adress: '${location.x}, ${location.y}',
      price: getRandomArrayElement(PRICE),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomArrayElement(ROOMS),
      guests: getRandomArrayElement(GUESTS),
      checkin: getRandomArrayElement(CHECKING_TIME),
      checkout: getRandomArrayElement(CHECKING_TIME),
      features: getRandomArrayElement(FEATURES),
      description: 'Эта жилплощадь подходит вамбольше всего',
      photos: getRandomArrayElement(PHOTOS),
    },
    location {
      coordinate: getRandomMapCoordination(LOCATIONS),
    },
  }
};
*/
