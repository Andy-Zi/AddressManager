import Termin from '../../DataSchema/Termin';
import DBTermin from '../DBschema/DBTermin';

const convertTerminDBToData = (termin: DBTermin): Termin => {
  return new Termin({
    id: termin.id,
    Title: termin.Title,
    Beschreibung: termin.Beschreibung,
    Kilometerstand: termin.Kilometerstand,
    Datum: termin.Datum ? new Date(termin.Datum) : null,
  });
};

const convertTerminDataToDB = (termin: Termin): DBTermin => {
  return {
    id: termin.id,
    Title: termin.Title,
    Beschreibung: termin.Beschreibung,
    Kilometerstand: termin.Kilometerstand ?? undefined,
    Datum: termin.Datum?.toISOString() ?? undefined,
  };
};

export { convertTerminDBToData, convertTerminDataToDB };
