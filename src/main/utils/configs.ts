import { app } from 'electron';
import path from 'path';

const configs = {
  name: 'AddressManger',
  version: '1.0.0',
  settingsFile: 'settings.json',
  saveLocation: '',
};

configs.saveLocation = path.join(app.getPath('documents'), configs.name);

export default configs;
