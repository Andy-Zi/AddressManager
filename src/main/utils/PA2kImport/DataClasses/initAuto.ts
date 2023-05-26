/* eslint-disable no-nested-ternary */
import Kunde from '../../../Database/DataSchema/Kunde';
import Auto from '../../../Database/DataSchema/Auto';
import Bremsscheibe from '../../../Database/DataSchema/Bremsscheibe';
import Teile from '../../../Database/DataSchema/Teile';
import Teil from '../../../Database/DataSchema/Teil';

function getBoolValue(ja: string, nein: string) {
  const j = ja ? (ja === 'Y' ? true : ja === 'N' ? false : null) : null;

  const n = nein ? (nein === 'Y' ? false : nein === 'N' ? true : null) : null;

  if (j === null || n === null) {
    return null;
  }
  if (j === n) {
    return j;
  }
  return null;
}

export default function initAuto(
  kunde: Kunde,
  dataset: { [k: string]: string }
): Auto {
  const car = new Auto({});

  car.Kennzeichen = dataset.KENNZEICH
    ? dataset.KENNZEICH.replace('-', ' ')
    : '';
  car.Verkauft =
    dataset.VERKAUFT === 'Y' ? true : dataset.VERKAUFT === 'N' ? false : null;
  car.Hersteller = dataset.HERSTELLE ?? '';
  car.Modell = dataset.TYP ?? ''; // TODO: WTF
  car.Typ = dataset.TYP ?? ''; // TODO: WTF
  car.IdentNr = dataset.IDENTNR ?? '';

  car.SchluesselNrZu1 = dataset.ZU1 ?? '';
  car.SchluesselNrZu2 = dataset.ZU2 ?? '';
  car.SchluesselNrZu31 = dataset.ZU31 ?? '';

  car.Leistung = dataset.KW ?? '';
  car.MotorumdrehungenProMinute = dataset.MIN ?? '';
  car.Hubraum = dataset.HUBRAUM ?? '';

  if (dataset.ZULASSUNG) {
    const [day, month, year] = dataset.ZULASSUNG.split('.');
    let yearNumber: number;
    if (parseInt(year, 10) < 100) {
      const today = new Date();
      let yearPrefix = today.getFullYear().toString().substr(0, 2);
      const currYear = today.getFullYear().toString().substr(2, 4);
      if (year > currYear) {
        yearPrefix = (parseInt(yearPrefix, 10) - 1).toString();
      }
      yearNumber = parseInt(yearPrefix + year, 10);
    } else {
      yearNumber = parseInt(year, 10);
    }
    car.Zulassung = new Date(
      yearNumber,
      parseInt(month, 10) - 1,
      parseInt(day, 10)
    );
  } else {
    car.Zulassung = null;
  }

  car.Modelljahr = null; // TODO get Data
  car.Motornummer = dataset.MOTORNR ?? '';
  car.Getriebenummer = dataset.GETRIEBE ?? '';
  car.Farbe = dataset.FARBE ?? '';
  car.Motorart =
    dataset.BENZIN === 'Y'
      ? 'Benzin'
      : dataset.DIESEL === 'Y'
      ? 'Diesel'
      : dataset.MOTOR === 'Y'
      ? dataset.MOTOREXTR
      : '';
  car.Servolenkung = getBoolValue(dataset.SERVOJA, dataset.SERVONEIN);
  car.Klimaanlage = getBoolValue(dataset.KLIMAJA, dataset.KLIMANEIN);
  car.ABS = getBoolValue(dataset.ABS, dataset.ABSNEIN);
  car.Allradantrieb = getBoolValue(dataset.ALLRADJA, dataset.ALLRADNEI);
  car.ZentralVerrieglung = getBoolValue(dataset.ZVJA, dataset.ZVNEIN);
  car.AnhaengerKupplung = getBoolValue(dataset.AHKJA, dataset.AHKNEIN);
  car.Tueren = dataset.TUER ?? '';
  car.Karosserieform = dataset.KARO ?? '';
  car.FelgenLoecher = dataset.LOCH ?? '';
  car.Heck = dataset.HECKK ?? '';
  car.HuAu =
    dataset.HUJA && dataset.HUMO
      ? new Date(parseInt(dataset.HUJA, 10), parseInt(dataset.HUMO, 10) - 1, 1)
      : null;
  car.Reifen = dataset.REIFEN ?? '';
  car.Motor = dataset.MOTZYL ?? '';
  car.Getriebe = dataset.GANG ?? '';
  car.Partikelfilter =
    dataset.PARTIKELF === 'JA'
      ? true
      : dataset.PARTIKELF === 'NEIN'
      ? false
      : null;

  const bsV = new Bremsscheibe({});
  bsV.Innenbelueftet = dataset.BRESCHEIV ?? '';
  bsV.Groeße = ''; // TODO get Data
  car.BremsscheibeVorne = bsV;

  const bsH = new Bremsscheibe({});
  bsH.Innenbelueftet = dataset.BRESCHEIH ?? '';
  bsH.Groeße = ''; // TODO get Data
  car.BremsscheibeHinten = bsH;

  car.MotorsteuerungTyp = dataset.MOTORSTEU ?? '';
  car.MotorsteuerungWechselintervallKm = dataset.WECHSELIN ?? '';
  // TODO ms.Wechselintervall_Zeit_Jahr

  const teile = new Teile({});
  teile.oelmenge = dataset.MITFILTER ?? '';
  teile.oelbezeichnung = dataset.OELBEZEIC ?? '';

  if (dataset.OELFILT1 || dataset.OELFILT2) {
    const oelfilter = new Teil({
      Bezeichnung: 'Ölfilter',
    });
    oelfilter.Teilenummer = dataset.OELFILT1 ?? '';
    oelfilter.Notizen = dataset.OELFIL2 ?? '';
    teile.TeilListe?.push(oelfilter);
  }

  if (dataset.LUFTFI1 || dataset.LUFTFI2) {
    const luftfilter = new Teil({
      Bezeichnung: 'Luftfilter',
    });
    luftfilter.Teilenummer = dataset.LUFTFI1 ?? '';
    luftfilter.Notizen = dataset.LUFTFI2 ?? '';
    teile.TeilListe?.push(luftfilter);
  }

  if (dataset.INNEN1 || dataset.INNEN2) {
    const innenraumfilter = new Teil({
      Bezeichnung: 'Innenraumfilter',
    });
    innenraumfilter.Teilenummer = dataset.INNEN1 ?? '';
    innenraumfilter.Notizen = dataset.INNEN2 ?? '';
    teile.TeilListe?.push(innenraumfilter);
  }

  if (dataset.KERZE1 || dataset.KERZE1) {
    const zuendGluehkerze = new Teil({
      Bezeichnung: 'Zünd- / Glühkerze',
    });
    zuendGluehkerze.Teilenummer = dataset.KERZE1 ?? '';
    zuendGluehkerze.Notizen = dataset.KERZE2 ?? '';
    teile.TeilListe?.push(zuendGluehkerze);
  }

  if (dataset.KRAFTST1 || dataset.KRAFTST2) {
    const kraftstofffilter = new Teil({
      Bezeichnung: 'Kraftstofffilter',
    });
    kraftstofffilter.Teilenummer = dataset.KRAFTST1 ?? '';
    kraftstofffilter.Notizen = dataset.KRAFTST2 ?? '';
    teile.TeilListe?.push(kraftstofffilter);
  }

  if (dataset.VDD1) {
    const vdd = new Teil({
      Bezeichnung: 'VDD',
    });
    vdd.Teilenummer = dataset.VDD1 ?? '';
    vdd.Notizen = '';
    teile.TeilListe?.push(vdd);
  }

  if (dataset.KEILRI1) {
    const keilriemen = new Teil({
      Bezeichnung: 'Keilriemen',
    });
    keilriemen.Teilenummer = dataset.KEILRI1 ?? '';
    keilriemen.Notizen = '';
    teile.TeilListe?.push(keilriemen);
  }

  if (dataset.E1 && (dataset.E11 || dataset.E12)) {
    const e1 = new Teil({
      Bezeichnung: dataset.E1,
    });
    e1.Teilenummer = dataset.E11 ?? '';
    e1.Notizen = dataset.E12 ?? '';
    teile.TeilListe?.push(e1);
  }
  if (dataset.E2 && (dataset.E21 || dataset.E22)) {
    const e2 = new Teil({
      Bezeichnung: dataset.E2,
    });
    e2.Teilenummer = dataset.E21 ?? '';
    e2.Notizen = dataset.E22 ?? '';
    teile.TeilListe?.push(e2);
  }
  if (dataset.E3 && (dataset.E31 || dataset.E32)) {
    const e3 = new Teil({
      Bezeichnung: dataset.E3,
    });
    e3.Teilenummer = dataset.E31 ?? '';
    e3.Notizen = dataset.E32 ?? '';
    teile.TeilListe?.push(e3);
  }

  car.AutoTeile = teile;

  car.Kommentar = dataset.BEMERKUNG ?? '';

  return car;
}
