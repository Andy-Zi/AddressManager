import { app, dialog, ipcMain } from 'electron';

import handlePA2kImport from './Functions/settingsHandler/handlePA2kImport';
import {
  openFileDialog,
  openFolderDialog,
} from './Functions/generalHandler/generalHandler';
import { KundenList } from './Functions/databaseHandler/databaseHandler';

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
