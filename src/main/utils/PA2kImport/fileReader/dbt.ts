import path from 'path';
import fs from 'fs';

class DBT {
  filepath: string;

  fileContentInBin: Buffer;

  ItemLen = 512;

  constructor(filepath: string) {
    const file = path.join('Datensatz', '2020_10.DBT');
    this.filepath = path.join(filepath, file);
    this.fileContentInBin = fs.readFileSync(this.filepath);
  }

  getNote(offset: number) {
    const start = offset * this.ItemLen;
    const end = start + this.ItemLen;
    const bytes = this.fileContentInBin.slice(start, end);
    const len = bytes.slice(4, 5).readIntLE(0, 1);
    const x3 = bytes.slice(8, len).toString('binary');

    return x3;
  }

  getDocuments(offset: number) {
    const start = offset * this.ItemLen;
    const bytes = this.fileContentInBin.slice(start);
    const len = bytes.slice(4, 7).readIntLE(0, 3);

    const x3 = bytes
      .slice(9, len - 1)
      .toString('binary')
      .split('\u001e');

    return x3;
  }
}

export default DBT;
