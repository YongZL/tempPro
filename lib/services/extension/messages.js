const extension = require('extensionizer');
var browser = require('webextension-polyfill');

export const sendMessage = (message) => {
  const { runtime } = browser;

  console.log('browser');

  return new Promise((resolve, reject) => {
    runtime.sendMessage(message, (result) => {
      console.log('resultresultresult', result, runtime, message);

      const err = runtime.lastError;
      if (!err) {
        resolve(result);
      }
      reject(err);
    });
  });
};

export const getManifest = () => {
  const { runtime } = extension;
  return new Promise((resolve, reject) => {
    try {
      resolve(runtime.getManifest());
    } catch (err) {
      reject(err);
    }
  });
};
