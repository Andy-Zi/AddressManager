import {
  ElectronHandler,
  GeneralHandler,
  SettingsHandler,
} from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    settings: SettingsHandler;
    general: GeneralHandler;
  }
}

export {};
