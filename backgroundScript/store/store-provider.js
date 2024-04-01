// const store = require('./configure-store')({});
import store from './configure-store';

export const getStore = () => store;

export const setStore = () => {
  throw new Error('Not Implemented yet !');
};
