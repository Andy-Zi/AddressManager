import {
  ElectronHandler,
  GeneralHandler,
  SettingsHandler,
  DatabaseHandler,
} from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    settings: SettingsHandler;
    general: GeneralHandler;
    database: DatabaseHandler;
  }
}

export {};
