type DBKunde = {
  id: string;

  Kundennummer?: string;

  ErstelltAm?: string;

  Name?: string[];

  Ort?: string;

  Straße?: string;

  Telefon?: string[];

  Mobile?: string[];

  Email?: string[];

  Autos: string[];
};

export default DBKunde;
