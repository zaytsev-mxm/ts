import getDate from './helpers/get-date.ts';

const start = () => {
  const date = getDate();
  console.log('Date is ', date);
};

start();

export { start };
