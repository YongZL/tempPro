const extension = require('webextension-polyfill');

export const getURL = (url) => {
  const { getURL } = extension.extension;
  try {
    return getURL(url);
  } catch (e) {
    throw new Error('Unable to get extension URL');
  }
};
