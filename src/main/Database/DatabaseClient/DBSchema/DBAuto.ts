type DBTeil = {
  Bezeichnung: string;

  Teilenummer?: string;

  Notizen?: string;
};

type DBTeile = {
  oelmenge?: string;

  oelbezeichnung?: string;

  TeilListe: DBTeil[];
};

type DBBremsscheibe = {
  Innenbelueftet?: string;

  Groeße?: string;
};

type DBAuto = {
  id: string;

  Kennzeichen?: string;

  Verkauft?: boolean;

  Hersteller?: string;

  Modell?: string;

  Typ?: string;

  IdentNr?: string;

  SchluesselNrZu1?: string;

  SchluesselNrZu2?: string;

  SchluesselNrZu31?: string;

  Leistung?: string;

  MotorumdrehungenProMinute?: string;

  Hubraum?: string;

  Zulassung?: string;

  Modelljahr?: string;

  Motornummer?: string;

  Getriebenummer?: string;

  Farbe?: string;

  Motorart?: string;

  Servolenkung?: boolean;

  Klimaanlage?: boolean;

  KlimaanlageKaeltemittel?: string;

  ABS?: boolean;

  Allradantrieb?: boolean;

  ZentralVerrieglung?: boolean;

  AnhaengerKupplung?: boolean;

  Tueren?: string;

  Karosserieform?: string;

  FelgenLoecher?: string;

  Heck?: string;

  HuAu?: string;

  Reifen?: string;

  Motor?: string;

  Getriebe?: string;

  Partikelfilter?: string;

  Feststellbremse?: string;

  BremsscheibeVorne?: DBBremsscheibe;

  BremsscheibeHinten?: DBBremsscheibe;

  MotorsteuerungTyp?: string;

  MotorsteuerungWechselintervallKm?: string;

  MotorsteuerungWechselintervallZeitJahr?: string;

  AutoTeile?: DBTeile;

  Kommentar?: string;

  Notiz?: string;

  Dokumente: string[];

  Termine: string[];
};

export default DBAuto;
export { DBTeil, DBTeile, DBBremsscheibe };
