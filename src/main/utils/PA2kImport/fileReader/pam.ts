import path from 'path';
import fs from 'fs';

class PAM {
  filepath: string;

  fileContentInBin: Buffer;

  HeaderLen = 3582;

  HeaderRowLen = 32;

  constructor(filepath: string) {
    const file = path.join('Datensatz', '2020_10.PAM');
    this.filepath = path.join(filepath, file);
    this.fileContentInBin = fs.readFileSync(this.filepath);
  }

  Import() {
    const header = this.fileContentInBin.slice(0, this.HeaderLen);
    const data = this.fileContentInBin.slice(this.HeaderLen+4);

    const FieldLen = [];
    let ItemLen = 0;
    for (let i = 1; i < this.HeaderLen / this.HeaderRowLen; i += 1) {
      const row = header.slice(
        i * this.HeaderRowLen,
        (i + 1) * this.HeaderRowLen
      );
      const split = row.findIndex((x) => x === 0);
      const name = row.slice(0, split).toString('binary');
      const len = row.slice(16, 17).readUIntLE(0, 1);
      ItemLen += len;
      FieldLen.push({ name, len });
    }

    ItemLen += 1;

    const Kundendaten = [];
    for (let i = 0; i < data.length / ItemLen; i += 1) {
      const KundeByte = data.slice(i * ItemLen, (i + 1) * ItemLen);
      let currOffset = 0;
      const Kunde: { [k: string]: string } = {};
      FieldLen.forEach((field) => {
        const value = KundeByte.slice(currOffset, currOffset + field.len)
          .toString('binary')
          .trim();
        Kunde[field.name] = value;
        currOffset += field.len;
      });
      Kundendaten.push(Kunde);
    }
    return Kundendaten;
  }
}

export default PAM;
