import { v4 as uuidv4 } from 'uuid';

import Teile from './Teile';
import Termin from './Termin';

export default class Auto {
  public id: string;

  public Kennzeichen: string;

  public Verkauft: boolean | null;

  public Hersteller: string;

  public Modell: string;

  public Typ: string;

  public IdentNr: string;

  public SchluesselNrZu1: string;

  public SchluesselNrZu2: string;

  public SchluesselNrZu31: string;

  public Leistung: string;

  public MotorumdrehungenProMinute: string;

  public Hubraum: string;

  public Zulassung: Date | null;

  public Modelljahr: Date | null;

  public Motornummer: string;

  public Getriebenummer: string;

  public Farbe: string;

  public Motorart: string;

  public Servolenkung: boolean | null;

  public Klimaanlage: boolean | null;

  public KlimaanlageKaeltemittel: string;

  public ABS: boolean | null;

  public Allradantrieb: boolean | null;

  public ZentralVerrieglung: boolean | null;

  public AnhaengerKupplung: boolean | null;

  public Tueren: string;

  public Karosserieform: string;

  public FelgenLoecher: string;

  public Heck: string;

  public HuAu: Date | null;

  public Reifen: string;

  public Motor: string;

  public Getriebe: string;

  public Partikelfilter: boolean | null;

  public Feststellbremse: string;

  public BremsscheibeVorneInnenbelueftet: boolean | null;

  public BremsscheibeVorneGroeße: string;

  public BremsscheibeHintenInnenbelueftet: boolean | null;

  public BremsscheibeHintenGroeße: string;

  public MotorsteuerungTyp: string;

  public MotorsteuerungWechselintervallKm: string;

  public MotorsteuerungWechselintervallZeitJahr: string;

  public AutoTeile: Teile;

  public Kommentar: string;

  public Notiz: string;

  public Dokumente: string[];

  public Termine: Termin[];

  constructor({
    id = uuidv4(),
    Kennzeichen = '',
    Verkauft = null,
    Hersteller = '',
    Modell = '',
    Typ = '',
    IdentNr = '',
    SchluesselNrZu1 = '',
    SchluesselNrZu2 = '',
    SchluesselNrZu31 = '',
    Leistung = '',
    MotorumdrehungenProMinute = '',
    Hubraum = '',
    Zulassung = null,
    Modelljahr = null,
    Motornummer = '',
    Getriebenummer = '',
    Farbe = '',
    Motorart = '',
    Servolenkung = null,
    Klimaanlage = null,
    KlimaanlageKaeltemittel = '',
    ABS = null,
    Allradantrieb = null,
    ZentralVerrieglung = null,
    AnhaengerKupplung = null,
    Tueren = '',
    Karosserieform = '',
    FelgenLoecher = '',
    Heck = '',
    HuAu = null,
    Reifen = '',
    Motor = '',
    Getriebe = '',
    Partikelfilter = null,
    Feststellbremse = '',
    BremsscheibeVorneInnenbelueftet = null,
    BremsscheibeVorneGroeße = '',
    BremsscheibeHintenInnenbelueftet = null,
    BremsscheibeHintenGroeße = '',
    MotorsteuerungTyp = '',
    MotorsteuerungWechselintervallKm = '',
    MotorsteuerungWechselintervallZeitJahr = '',
    AutoTeile = new Teile({}),
    Kommentar = '',
    Notiz = '',
    Dokumente = [],
    Termine = [],
  }: {
    id?: string;
    Kennzeichen?: string;
    Verkauft?: boolean | null;
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
    Zulassung?: Date | null;
    Modelljahr?: Date | null;
    Motornummer?: string;
    Getriebenummer?: string;
    Farbe?: string;
    Motorart?: string;
    Servolenkung?: boolean | null;
    Klimaanlage?: boolean | null;
    KlimaanlageKaeltemittel?: string;
    ABS?: boolean | null;
    Allradantrieb?: boolean | null;
    ZentralVerrieglung?: boolean | null;
    AnhaengerKupplung?: boolean | null;
    Tueren?: string;
    Karosserieform?: string;
    FelgenLoecher?: string;
    Heck?: string;
    HuAu?: Date | null;
    Reifen?: string;
    Motor?: string;
    Getriebe?: string;
    Partikelfilter?: boolean | null;
    Feststellbremse?: string;
    // BremsscheibeVorne?: Bremsscheibe;
    // BremsscheibeHinten?: Bremsscheibe;
    BremsscheibeVorneInnenbelueftet?: boolean | null;
    BremsscheibeVorneGroeße?: string;
    BremsscheibeHintenInnenbelueftet?: boolean | null;
    BremsscheibeHintenGroeße?: string;
    MotorsteuerungTyp?: string;
    MotorsteuerungWechselintervallKm?: string;
    MotorsteuerungWechselintervallZeitJahr?: string;
    AutoTeile?: Teile;
    Kommentar?: string;
    Notiz?: string;
    Dokumente?: string[];
    Termine?: Termin[];
  }) {
    this.id = id;
    this.Kennzeichen = Kennzeichen;
    this.Verkauft = Verkauft;
    this.Hersteller = Hersteller;
    this.Modell = Modell;
    this.Typ = Typ;
    this.IdentNr = IdentNr;
    this.SchluesselNrZu1 = SchluesselNrZu1;
    this.SchluesselNrZu2 = SchluesselNrZu2;
    this.SchluesselNrZu31 = SchluesselNrZu31;
    this.Leistung = Leistung;
    this.MotorumdrehungenProMinute = MotorumdrehungenProMinute;
    this.Hubraum = Hubraum;
    this.Zulassung = Zulassung;
    this.Modelljahr = Modelljahr;
    this.Motornummer = Motornummer;
    this.Getriebenummer = Getriebenummer;
    this.Farbe = Farbe;
    this.Motorart = Motorart;
    this.Servolenkung = Servolenkung;
    this.Klimaanlage = Klimaanlage;
    this.KlimaanlageKaeltemittel = KlimaanlageKaeltemittel;
    this.ABS = ABS;
    this.Allradantrieb = Allradantrieb;
    this.ZentralVerrieglung = ZentralVerrieglung;
    this.AnhaengerKupplung = AnhaengerKupplung;
    this.Tueren = Tueren;
    this.Karosserieform = Karosserieform;
    this.FelgenLoecher = FelgenLoecher;
    this.Heck = Heck;
    this.HuAu = HuAu;
    this.Reifen = Reifen;
    this.Motor = Motor;
    this.Getriebe = Getriebe;
    this.Partikelfilter = Partikelfilter;
    this.Feststellbremse = Feststellbremse;
    // this.BremsscheibeVorne = BremsscheibeVorne;
    // this.BremsscheibeHinten = BremsscheibeHinten;
    this.BremsscheibeVorneInnenbelueftet = BremsscheibeVorneInnenbelueftet;
    this.BremsscheibeVorneGroeße = BremsscheibeVorneGroeße;
    this.BremsscheibeHintenInnenbelueftet = BremsscheibeHintenInnenbelueftet;
    this.BremsscheibeHintenGroeße = BremsscheibeHintenGroeße;
    this.MotorsteuerungTyp = MotorsteuerungTyp;
    this.MotorsteuerungWechselintervallKm = MotorsteuerungWechselintervallKm;
    this.MotorsteuerungWechselintervallZeitJahr =
      MotorsteuerungWechselintervallZeitJahr;
    this.AutoTeile = AutoTeile;
    this.Kommentar = Kommentar;
    this.Notiz = Notiz;
    this.Dokumente = Dokumente;
    this.Termine = Termine;
  }
}
