import AppConfig from '../../lib/constants/config';
import configureStoreProd from './configure-store.prod';
import configureStoreDev from './configure-store.dev';

const storeConfig = AppConfig.isProd ? configureStoreProd : configureStoreDev;

export default storeConfig;
