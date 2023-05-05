import fs from 'fs';

import City from '../../../Database/DataSchema/City';

export default class CityImport {
  filepath: string;

  fileContentInBin: string;

  constructor(filepath: string) {
    // const file = 'PLZ_2021.csv';
    // this.filepath = path.join(filepath, file);
    this.filepath = filepath;
    this.fileContentInBin = fs.readFileSync(this.filepath, 'utf-8');
  }

  Import() {
    const cityLookup: City[] = [];

    this.fileContentInBin.split(/\r?\n/).forEach((line) => {
      const [plz, ort, ortsteil] = line.split(',');
      const plzObj = new City({
        PLZ: plz,
        Ort: ort,
        Ortsteil: ortsteil,
      });
      cityLookup.push(plzObj);
    });

    const emptyCity = new City({ id: '0', PLZ: '', Ort: '', Ortsteil: '' });

    cityLookup.push(emptyCity);

    return cityLookup;
  }
}
