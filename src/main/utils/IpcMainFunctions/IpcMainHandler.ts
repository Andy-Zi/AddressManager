import { app, dialog, ipcMain, shell } from 'electron';

import handlePA2kImport from './Functions/settingsHandler/handlePA2kImport';
import {
  openFileDialog,
  openFolderDialog,
} from './Functions/generalHandler/generalHandler';
import {
  KundenList,
  getKundeByID,
} from './Functions/databaseHandler/databaseHandler';

function IpcSettingsHandler() {
  ipcMain.handle(
    'settings:import:pa2k',
    (event, pa2kPath: string, zipPath: string): Promise<boolean> => {
      return handlePA2kImport(pa2kPath, zipPath);
    }
  );
}

function IpcGeneralHandler() {
  ipcMain.handle('general:open-folder-dialog', async (event) => {
    return openFolderDialog(event);
  });
  ipcMain.handle('general:open-file-dialog', async (event) => {
    return openFileDialog(event);
  });
  ipcMain.handle('general:show-message-box', async (event, options) => {
    return dialog.showMessageBox(options);
  });
  ipcMain.handle('general:openFile', async (event, path: string) => {
    shell.openPath(path);
  });
}

function IpcDatabaseHandler() {
  // TODO: Implement IpcDatabaseHandler
  // ipcMain.handle('db:read:KundenWithID', (event) => handleGetClientsWithID(db));
  // ipcMain.handle('db:read:KundeByID', (event, id: string) =>
  //   handleGetClientByID(db, id)
  // );
  ipcMain.handle('db:read:KundenList', async () => {
    return KundenList();
  });
  ipcMain.handle('db:read:KundeByID', async (event, id: string) => {
    return getKundeByID(id);
  });
}

export default function IpcHandler() {
  app
    .whenReady()
    .then(() => {
      IpcSettingsHandler();
      IpcGeneralHandler();
      IpcDatabaseHandler();
      return true;
    })
    // eslint-disable-next-line no-console
    .catch(console.log);
}
