import path from 'path';
import fs from 'fs';

class TerminDBT {
  filepath: string;

  fileContentInBin: Buffer;

  ItemLen = 512;

  constructor(filepath: string) {
    const file = 'DBTERMIN.DBT';
    this.filepath = path.join(filepath, file);
    this.fileContentInBin = fs.readFileSync(this.filepath);
  }

  getNote(offset: number): string {
    const start = offset * this.ItemLen;
    const end = start + this.ItemLen;
    const bytes = this.fileContentInBin.slice(start, end);
    const len = bytes.slice(4, 5).readIntLE(0, 1);
    const x3 = bytes.slice(8, len).toString('binary');

    return x3;
  }
}

export default TerminDBT;
