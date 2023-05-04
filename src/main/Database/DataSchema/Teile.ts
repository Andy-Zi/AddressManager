import Teil from './Teil';

class Teile {
  public oelmenge: string;

  public oelbezeichnung: string;

  public TeilListe: Teil[];

  constructor({
    oelmenge = '',
    oelbezeichnung = '',
    TeilListe = [],
  }: {
    oelmenge?: string;
    oelbezeichnung?: string;
    TeilListe?: Teil[];
  }) {
    this.oelmenge = oelmenge;
    this.oelbezeichnung = oelbezeichnung;
    this.TeilListe = TeilListe;
  }
}

export default Teile;
