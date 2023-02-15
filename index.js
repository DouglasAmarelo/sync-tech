const people = [
  'Amarelo',
  'João',
  'Theus',
  'Painho',
  'Ronin',
  'Tiaguinho',
  'Yuri',
];

const getRandomPerson = (peopleList = people) =>
  peopleList[Math.floor(Math.random() * peopleList.length)];

const comigoNaoMorreu = () => {
  const newSynchronizer = getRandomPerson();
  updateTankerName(newSynchronizer);
};

const updateTankerName = (name = 'Você!') => {
  const $name = document.querySelector('.name');
  $name.textContent = name;
};

const start = () => {
  const theSynchronizer = getRandomPerson();

  updateTankerName(theSynchronizer);
};

start();
