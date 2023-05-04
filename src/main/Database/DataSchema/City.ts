import { v4 as uuidv4 } from 'uuid';

class City {
  public id: string;

  public PLZ: string;

  public Ort: string;

  public Ortsteil?: string;

  constructor({
    id = uuidv4(),
    PLZ,
    Ort,
    Ortsteil,
  }: {
    id?: string;
    PLZ: string;
    Ort: string;
    Ortsteil?: string;
  }) {
    this.id = id;
    this.PLZ = PLZ;
    this.Ort = Ort;
    this.Ortsteil = Ortsteil;
  }
}

export default City;
