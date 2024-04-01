import extension from 'webextension-polyfill';

extension.notifications.onClicked.addListener(async (detailUrl) => {
  if (detailUrl !== undefined || detailUrl !== null) {
    extension.tabs.create({
      url: detailUrl,
    });
  }
});
