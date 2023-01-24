const workSchedule = [
  'Joao Iglesias',
  'Matheus Cruz',
  'Rodrigo Leme',
  'Tiago Kamegasawa',
  'Yuri Martins',
];

const comigoNaoMorreu = () => {
  const filteredSynchronizer = workSchedule.filter(
    name => name != getTheSynchronizer()
  );
  const newSynchronizer =
    filteredSynchronizer[
      Math.floor(Math.random() * filteredSynchronizer.length)
    ];

  updateTankerName(newSynchronizer);
};

const getDateFromUrl = () => {
  const urlParams = new URLSearchParams(window?.location?.search);
  const dateFromParams = urlParams.get('date');
  const isAValidDate = String(dateFromParams).match(/\d{4}-\d{2}-\d{2}/gim);

  return isAValidDate ? dateFromParams : null;
};

const generateDate = () => {
  const customDate = getDateFromUrl();
  const date = customDate ? new Date(customDate) : new Date();
  const today = date.getUTCDate();
  const dayOfTheWeek = date.getUTCDay() - 1;
  const weekOfTheMonth = Math.ceil((today - dayOfTheWeek) / 7) - 1;

  return {
    today,
    dayOfTheWeek,
    weekOfTheMonth,
  };
};

const getTheSynchronizer = () => {
  const { dayOfTheWeek } = generateDate();
  const theSynchronizer = workSchedule[dayOfTheWeek];

  return theSynchronizer;
};

const updateTankerName = (name = 'Você!') => {
  const $name = document.querySelector('.name');
  $name.textContent = name;
};

const start = () => {
  const theSynchronizer = getTheSynchronizer();

  updateTankerName(theSynchronizer);
};

start();
