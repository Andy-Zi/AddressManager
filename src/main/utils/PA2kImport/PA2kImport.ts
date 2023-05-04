import DatabaseClient from '../../Database/DatabaseClient/DatabaseClient';
import initAuto from './DataClasses/initAuto';
import initKunde from './DataClasses/initKunde';
import initTermin from './DataClasses/initTermin';
import CityImport from './fileReader/CityImport';
import DBT from './fileReader/dbt';
import PAM from './fileReader/pam';
import TerminDAT from './fileReader/TERMIN_DAT';
import TerminDBT from './fileReader/TERMIN_DBT';

function PA2kImport(
  pa2kPath: string,
  zipPath: string,
  database: DatabaseClient
) {
  database.clearDatabase();
  database.enableMemoryMode();
  const cityLookup = new CityImport(zipPath).Import();
  database.write?.NewManyCity(cityLookup);

  const PamData = new PAM(pa2kPath).Import();
  const DbtData = new DBT(pa2kPath);

  const autoLookup: { [k: number]: string } = {};
  const errors: number[] = [];

  PamData.forEach((dataset) => {
    const kunde = initKunde(database, dataset);
    const auto = initAuto(kunde, dataset);

    kunde.Autos.push(auto);

    database.write.UpdateKunde(kunde);

    try {
      autoLookup[Number(dataset.NUMER)] = auto.id;
    } catch (e) {
      errors.push(Number(dataset.NUMER));
    }

    if (dataset.MEMO2) {
      DbtData.getDocuments(Number(dataset.MEMO2)).forEach((note) => {
        auto.Dokumente.push(note);
      });
    }

    if (dataset.MEMO1) {
      auto.Notiz = DbtData.getNote(Number(dataset.MEMO1));
    }

    database.write.NewAuto(auto);
  });

  const DatTermine = new TerminDAT(pa2kPath).Import();
  const DbtTermine = new TerminDBT(pa2kPath);

  DatTermine.forEach((dataset) => {
    const termin = initTermin(database, autoLookup, dataset, DbtTermine);
    database.write?.NewTermin(termin);
  });

  database.disableMemoryMode();
}

export default PA2kImport;
