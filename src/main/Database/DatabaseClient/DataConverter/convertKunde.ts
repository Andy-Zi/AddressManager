import Kunde from '../../DataSchema/Kunde';
import ListViewKunde from '../../DataSchema/ListViewKunde';
// eslint-disable-next-line import/no-cycle
import DatabaseClient from '../DatabaseClient';
import DBKunde from '../DBschema/DBKunde';

const convertKundeDBToData = (db: DatabaseClient, kundeDB: DBKunde): Kunde => {
  return new Kunde({
    id: kundeDB.id,
    Kundennummer: kundeDB.Kundennummer,
    ErstelltAm: kundeDB.ErstelltAm ? new Date(kundeDB.ErstelltAm) : undefined,
    Name: kundeDB.Name,
    Ort: kundeDB.Ort ? db.read.CityById(kundeDB.Ort) : undefined,
    Straße: kundeDB.Straße,
    Telefon: kundeDB.Telefon,
    Mobile: kundeDB.Mobile,
    Email: kundeDB.Email,
    Autos: kundeDB.Autos.map((autoId) => db.read.AutoByID(autoId)),
  });
};

const convertKundeDataToDB = (kunde: Kunde): DBKunde => {
  return {
    id: kunde.id,
    Kundennummer: kunde.Kundennummer,
    ErstelltAm: kunde.ErstelltAm?.toISOString() ?? undefined,
    Name: kunde.Name,
    Ort: kunde.Ort?.id ?? undefined,
    Straße: kunde.Straße,
    Telefon: kunde.Telefon,
    Mobile: kunde.Mobile,
    Email: kunde.Email,
    Autos: kunde.Autos.map((auto) => auto.id),
  };
};

const convertDBtoListViewKunde = (db: DatabaseClient, kundeDB: DBKunde): ListViewKunde => {
  return new ListViewKunde({
    id: kundeDB.id,
    Kundennummer: kundeDB.Kundennummer,
    ErstelltAm: kundeDB.ErstelltAm ? new Date(kundeDB.ErstelltAm) : undefined,
    Name: kundeDB.Name,
    Ort: kundeDB.Ort ? db.read.CityById(kundeDB.Ort) : undefined,
    Straße: kundeDB.Straße,
    Telefon: kundeDB.Telefon,
    Mobile: kundeDB.Mobile,
    Email: kundeDB.Email,
    Autos: kundeDB.Autos,
  });
};


export { convertKundeDBToData, convertKundeDataToDB, convertDBtoListViewKunde };
