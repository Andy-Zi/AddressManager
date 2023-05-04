import { BrowserWindow, app, dialog, ipcMain } from 'electron';

import handlePA2kImport from './Functions/settingsHandler/handlePA2kImport';

function IpcSettingsHandler() {
  ipcMain.handle(
    'settings:import:pa2k',
    (event, pa2kPath: string, zipPath: string) =>
      handlePA2kImport(pa2kPath, zipPath)
  );
}

function IpcGeneralHandler() {
  ipcMain.handle('general:open-file-dialog', async (event) => {
    const mainWindow = BrowserWindow.fromWebContents(event.sender);
    let result = null;
    if (mainWindow) {
      result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory'],
      });
    }
    return result;
  });
}

function IpcDatabaseHandler() {
  // TODO: Implement IpcDatabaseHandler
  // ipcMain.handle('db:read:KundenWithID', (event) => handleGetClientsWithID(db));
  // ipcMain.handle('db:read:KundeByID', (event, id: string) =>
  //   handleGetClientByID(db, id)
  // );
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
