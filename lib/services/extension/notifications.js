const extension = require('webextension-polyfill');

export const createNotification = async (title, message, url) =>
  extension.notifications.create(url, {
    type: 'basic',
    title,
    iconUrl: extension.extension.getURL('../../img/icon-32.png'),
    message,
  });
