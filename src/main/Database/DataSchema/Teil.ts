class Teil {
  public Bezeichnung: string;

  public Teilenummer: string;

  public Notizen: string;

  constructor({
    Bezeichnung = '',
    Teilenummer = '',
    Notizen = '',
  }: {
    Bezeichnung: string;
    Teilenummer?: string;
    Notizen?: string;
  }) {
    this.Bezeichnung = Bezeichnung;
    this.Teilenummer = Teilenummer;
    this.Notizen = Notizen;
  }
}

export default Teil;
