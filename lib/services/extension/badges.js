const extension = require('webextension-polyfill');

export function getBadgeText() {
  return extension.browserAction.getBadgeText({});
}

export function setBadgeText(text) {
  return extension.browserAction.setBadgeText({ text });
}
