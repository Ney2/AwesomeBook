/* eslint-disable linebreak-style */
import { DateTime } from './Luxon.js';

const time = document.querySelector('.time');

// eslint-disable-next-line import/prefer-default-export
export const getTime = () => {
  const today = DateTime.local();
  const now = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  time.textContent = now;
};