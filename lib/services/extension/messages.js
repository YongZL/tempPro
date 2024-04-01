const extension = require('webextension-polyfill');

export const sendMessage = async (message) => {
  const { runtime } = extension;
  console.log('进入了啊大师', message, runtime);
  try {
    return new Promise((resolve, reject) => {
      runtime.sendMessage({ type: message.type }, (result) => {
        console.log('resultresult', result);
        const err = runtime.lastError;
        if (!err && result) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  } catch (e) {
    console.info('sendMessageerror', e);
  }
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
