import { v4 as uuidv4 } from 'uuid';

class Termin {
  public id: string;

  public Title: string;

  public Beschreibung: string;

  public Kilometerstand: number | null;

  public Datum: Date | null;

  constructor({
    id = uuidv4(),
    Title = '',
    Beschreibung = '',
    Kilometerstand = null,
    Datum = null,
  }: {
    id?: string;
    Title?: string;
    Beschreibung?: string;
    Kilometerstand?: number | null;
    Datum?: Date | null;
  }) {
    this.id = id;
    this.Title = Title;
    this.Beschreibung = Beschreibung;
    this.Kilometerstand = Kilometerstand;
    this.Datum = Datum;
  }
}

export default Termin;
