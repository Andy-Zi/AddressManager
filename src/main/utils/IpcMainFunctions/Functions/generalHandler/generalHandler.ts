import { BrowserWindow, dialog, IpcMainInvokeEvent } from 'electron';

export async function openFileDialog(event: IpcMainInvokeEvent) {
  const mainWindow = BrowserWindow.fromWebContents(event.sender);
  let result = null;
  if (mainWindow) {
    result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
    });
  }
  return result;
}

export async function openFolderDialog(event: IpcMainInvokeEvent) {
  const mainWindow = BrowserWindow.fromWebContents(event.sender);
  let result = null;
  if (mainWindow) {
    result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory'],
    });
  }
  return result;
}
