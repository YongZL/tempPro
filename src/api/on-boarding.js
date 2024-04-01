import * as MessageTypes from '../../lib/constants/message-types';
import {
  sendMessage,
  getManifest,
} from '../../lib/services/extension/messages';
import { throwIfNoSuccess } from './helper';

export const setHashKey = async (hashKey) => {
  const { message, status, result } = await sendMessage({
    type: MessageTypes.BG_SET_HASH_KEY,
    data: hashKey,
  });
  throwIfNoSuccess({ message, status });
  return { result };
};

export const getIsAppOnBoarded = async () => {
  const { message, status, result } = await sendMessage({
    type: MessageTypes.BG_APP_IS_ONBOARDED,
  });
  throwIfNoSuccess({ message, status });
  return { result };
};

export const setIsAppOnBoarded = async () => {
  const { message, status, result } = await sendMessage({
    type: MessageTypes.BG_APP_SET_ONBOARDED,
  });
  throwIfNoSuccess({ message, status });
  return { result };
};

export const fetchManifest = async () => {
  const manifest = await getManifest();
  return manifest;
};

export const fetchLanguage = async () => {
  try {
    console.log('进入了fetchLanguage222');

    const { message, status, result } = await sendMessage({
      type: MessageTypes.BG_APP_GET_LANGUAGE,
    });

    console.log('messagemessagemessage', status, result);
    throwIfNoSuccess({ message, status });
    return { result };
  } catch (e) {
    console.log('eeeeeadasdas', e);
  }
};

export const setLangeuage = async (language) => {
  const { message, status, result } = await sendMessage({
    type: MessageTypes.BG_APP_SET_LANGUAGE,
    data: language,
  });
  throwIfNoSuccess({ message, status });
  return { result };
};

export const clearHashKey = async () => {
  const { message, status, result } = await sendMessage({
    type: MessageTypes.BG_CLEAR_HASH_KEY,
  });
  throwIfNoSuccess({ message, status });
  return { result };
};
