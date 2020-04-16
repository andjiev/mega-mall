import Moment from 'react-moment';
import moment from 'moment';

const initMoment = (culture: string) => {
  Moment.globalMoment = moment;
  Moment.globalLocale = culture;
  Moment.globalLocal = true;
  Moment.globalElement = 'span';
  Moment.globalFormat = 'lll';

  moment.locale(culture);
  moment.defaultFormat = 'lll';
};

export { initMoment };
