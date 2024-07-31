import { getDate } from './helpers/get-date';

const start = () => {
  const date = getDate();
  console.log('Date is ', date);
};

start();

export { start };
