import { parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

const useDatetime = (dateNow) => {
  const parseDate = parseISO(dateNow);
  const znDatetime = zonedTimeToUtc(parseDate, 'America/Sao_paulo');

  return znDatetime;
}

export default useDatetime;
