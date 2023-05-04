// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

const settingsHandler = {
  importPA2k(pa2kPath: string, zipPath: string): Promise<void> {
    return ipcRenderer.invoke('settings:import:pa2k', pa2kPath, zipPath);
  },
};

const generalHandler = {
  openFileDialog(): Promise<any> {
    return ipcRenderer.invoke('general:open-file-dialog');
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);
contextBridge.exposeInMainWorld('settings', settingsHandler);
contextBridge.exposeInMainWorld('general', generalHandler);

export type ElectronHandler = typeof electronHandler;
export type SettingsHandler = typeof settingsHandler;
export type GeneralHandler = typeof generalHandler;
