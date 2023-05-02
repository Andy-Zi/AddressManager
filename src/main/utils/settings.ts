import path from 'path';
import fs from 'fs';

export function createSettingsFileIfNotExist({
  app,
  configs,
}: {
  app: any;
  configs: any;
}) {
  const userDataPath = path.join(app.getPath('documents'), configs.name);
  const settingsFilePath = path.join(userDataPath, configs.settingsFile);

  if (!fs.existsSync(settingsFilePath)) {
    const defaultSettings = {
      // Add your default settings here
      // setting1: 'value1',
      // setting2: 'value2',
    };
    if (!fs.existsSync(userDataPath)) {
      fs.mkdirSync(userDataPath);
    }
    fs.writeFileSync(
      settingsFilePath,
      JSON.stringify(defaultSettings, null, 2)
    );
  }
}

export function getSettings({ app, configs }: { app: any; configs: any }) {
  const userDataPath = path.join(app.getPath('documents'), configs.name);
  const settingsFilePath = path.join(userDataPath, configs.settingsFile);

  const settings = JSON.parse(fs.readFileSync(settingsFilePath, 'utf-8'));

  return settings;
}

export function saveSettings({
  app,
  configs,
  settings,
}: {
  app: any;
  configs: any;
  settings: any;
}) {
  const userDataPath = path.join(app.getPath('documents'), configs.name);
  const settingsFilePath = path.join(userDataPath, configs.settingsFile);

  fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
}
