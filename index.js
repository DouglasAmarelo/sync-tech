import data from './workschedule.json' assert { type: 'json' };

const workSchedule = data.workSchedule;

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

const getTheTanker = () => {
  const { dayOfTheWeek } = generateDate();
  const theTanker = workSchedule[dayOfTheWeek];

  updateTankerName(theTanker);
};

const updateTankerName = (name = 'Você!') => {
  const $name = document.querySelector('.name');
  $name.textContent = name;
};

getTheTanker();
