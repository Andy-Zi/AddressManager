import Bremsscheibe from '../../DataSchema/Bremsscheibe';
import Auto from '../../DataSchema/Auto';
// eslint-disable-next-line import/no-cycle
import DatabaseClient from '../DatabaseClient';
import DBAuto from '../DBschema/DBAuto';
import {
  convertBremsscheibeDataToDB,
  convertBremsscheibeDBToData,
} from './convertBremsscheibe';
import { convertTeileDataToDB, convertTeileDBToData } from './convertTeile';
import Teile from '../../DataSchema/Teile';

const convertAutoDBToData = (db: DatabaseClient, dbAuto: DBAuto): Auto => {
  return new Auto({
    id: dbAuto.id,
    Kennzeichen: dbAuto.Kennzeichen,
    Verkauft: dbAuto.Verkauft ?? undefined,
    Hersteller: dbAuto.Hersteller,
    Modell: dbAuto.Modell,
    Typ: dbAuto.Typ,
    IdentNr: dbAuto.IdentNr,
    SchluesselNrZu1: dbAuto.SchluesselNrZu1,
    SchluesselNrZu2: dbAuto.SchluesselNrZu2,
    SchluesselNrZu31: dbAuto.SchluesselNrZu31,
    Leistung: dbAuto.Leistung,
    MotorumdrehungenProMinute: dbAuto.MotorumdrehungenProMinute,
    Hubraum: dbAuto.Hubraum,
    Zulassung: dbAuto.Zulassung ? new Date(dbAuto.Zulassung) : undefined,
    Modelljahr: dbAuto.Modelljahr ? new Date(dbAuto.Modelljahr) : undefined,
    Motornummer: dbAuto.Motornummer,
    Getriebenummer: dbAuto.Getriebenummer,
    Farbe: dbAuto.Farbe,
    Motorart: dbAuto.Motorart,
    Servolenkung: dbAuto.Servolenkung ?? undefined,
    Klimaanlage: dbAuto.Klimaanlage ?? undefined,
    KlimaanlageKaeltemittel: dbAuto.KlimaanlageKaeltemittel,
    ABS: dbAuto.ABS ?? undefined,
    Allradantrieb: dbAuto.Allradantrieb ?? undefined,
    ZentralVerrieglung: dbAuto.ZentralVerrieglung ?? undefined,
    AnhaengerKupplung: dbAuto.AnhaengerKupplung ?? undefined,
    Tueren: dbAuto.Tueren,
    Karosserieform: dbAuto.Karosserieform,
    FelgenLoecher: dbAuto.FelgenLoecher,
    Heck: dbAuto.Heck,
    HuAu: dbAuto.HuAu ? new Date(dbAuto.HuAu) : undefined,
    Reifen: dbAuto.Reifen,
    Motor: dbAuto.Motor,
    Getriebe: dbAuto.Getriebe,
    Partikelfilter: dbAuto.Partikelfilter,
    Feststellbremse: dbAuto.Feststellbremse,
    BremsscheibeVorne: dbAuto.BremsscheibeVorne
      ? convertBremsscheibeDBToData(dbAuto.BremsscheibeVorne)
      : new Bremsscheibe({}),
    BremsscheibeHinten: dbAuto.BremsscheibeHinten
      ? convertBremsscheibeDBToData(dbAuto.BremsscheibeHinten)
      : new Bremsscheibe({}),
    MotorsteuerungTyp: dbAuto.MotorsteuerungTyp,
    MotorsteuerungWechselintervallKm: dbAuto.MotorsteuerungWechselintervallKm,
    MotorsteuerungWechselintervallZeitJahr:
      dbAuto.MotorsteuerungWechselintervallZeitJahr,
    AutoTeile: dbAuto.AutoTeile
      ? convertTeileDBToData(dbAuto.AutoTeile)
      : new Teile({}),
    Kommentar: dbAuto.Kommentar,
    Notiz: dbAuto.Notiz,
    Dokumente: dbAuto.Dokumente,
    Termine: dbAuto.Termine ? db.read.TermineByIDs(dbAuto.Termine) : undefined,
  });
};

const convertAutoDataToDB = (auto: Auto): DBAuto => {
  return {
    id: auto.id,
    Kennzeichen: auto.Kennzeichen,
    Verkauft: auto.Verkauft ?? undefined,
    Hersteller: auto.Hersteller,
    Modell: auto.Modell,
    Typ: auto.Typ,
    IdentNr: auto.IdentNr,
    SchluesselNrZu1: auto.SchluesselNrZu1,
    SchluesselNrZu2: auto.SchluesselNrZu2,
    SchluesselNrZu31: auto.SchluesselNrZu31,
    Leistung: auto.Leistung,
    MotorumdrehungenProMinute: auto.MotorumdrehungenProMinute,
    Hubraum: auto.Hubraum,
    Zulassung: auto.Zulassung ? auto.Zulassung.toISOString() : undefined,
    Modelljahr: auto.Modelljahr ? auto.Modelljahr.toISOString() : undefined,
    Motornummer: auto.Motornummer,
    Getriebenummer: auto.Getriebenummer,
    Farbe: auto.Farbe,
    Motorart: auto.Motorart,
    Servolenkung: auto.Servolenkung ?? undefined,
    Klimaanlage: auto.Klimaanlage ?? undefined,
    KlimaanlageKaeltemittel: auto.KlimaanlageKaeltemittel,
    ABS: auto.ABS ?? undefined,
    Allradantrieb: auto.Allradantrieb ?? undefined,
    ZentralVerrieglung: auto.ZentralVerrieglung ?? undefined,
    AnhaengerKupplung: auto.AnhaengerKupplung ?? undefined,
    Tueren: auto.Tueren,
    Karosserieform: auto.Karosserieform,
    FelgenLoecher: auto.FelgenLoecher,
    Heck: auto.Heck,
    HuAu: auto.HuAu ? auto.HuAu.toISOString() : undefined,
    Reifen: auto.Reifen,
    Motor: auto.Motor,
    Getriebe: auto.Getriebe,
    Partikelfilter: auto.Partikelfilter,
    Feststellbremse: auto.Feststellbremse,
    BremsscheibeVorne: auto.BremsscheibeVorne
      ? convertBremsscheibeDataToDB(auto.BremsscheibeVorne)
      : undefined,
    BremsscheibeHinten: auto.BremsscheibeHinten
      ? convertBremsscheibeDataToDB(auto.BremsscheibeHinten)
      : undefined,
    MotorsteuerungTyp: auto.MotorsteuerungTyp,
    MotorsteuerungWechselintervallKm: auto.MotorsteuerungWechselintervallKm,
    MotorsteuerungWechselintervallZeitJahr:
      auto.MotorsteuerungWechselintervallZeitJahr,
    AutoTeile: auto.AutoTeile
      ? convertTeileDataToDB(auto.AutoTeile)
      : undefined,
    Kommentar: auto.Kommentar,
    Notiz: auto.Notiz,
    Dokumente: auto.Dokumente,
    Termine: auto.Termine.map((t) => t.id),
  };
};

export { convertAutoDBToData, convertAutoDataToDB };
