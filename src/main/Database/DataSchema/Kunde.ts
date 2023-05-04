import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/no-cycle
import Auto from './Auto';
import City from './City';

class Kunde {
  public id: string;

  public Kundennummer: string;

  public ErstelltAm: Date;

  public Name: string[];

  public Ort: City;

  public Straße: string;

  public Telefon: string[];

  public Mobile: string[];

  public Email: string[];

  public Autos: Auto[];

  constructor({
    id = uuidv4(),
    Kundennummer = '',
    ErstelltAm = new Date(),
    Name = [''],
    Ort = new City({ id: '0', PLZ: '', Ort: '', Ortsteil: '' }),
    Straße = '',
    Telefon = [''],
    Mobile = [''],
    Email = [''],
    Autos = [],
  }: {
    id?: string;
    Kundennummer?: string;
    ErstelltAm?: Date;
    Name?: string[];
    Ort?: City;
    Straße?: string;
    Telefon?: string[];
    Mobile?: string[];
    Email?: string[];
    Autos?: Auto[];
  }) {
    this.id = id;
    this.Kundennummer = Kundennummer;
    this.ErstelltAm = ErstelltAm;
    this.Name = Name;
    this.Ort = Ort;
    this.Straße = Straße;
    this.Telefon = Telefon;
    this.Mobile = Mobile;
    this.Email = Email;
    this.Autos = Autos;
  }
}

export default Kunde;
