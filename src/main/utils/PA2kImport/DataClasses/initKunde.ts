import City from '../../../Database/DataSchema/City';
import DatabaseClient from '../../../Database/DatabaseClient/DatabaseClient';
import Kunde from '../../../Database/DataSchema/Kunde';

export default function initKunde(
  dataBase: DatabaseClient,
  dataset: { [k: string]: string }
): Kunde {
  const kunde = dataBase.read?.KundeByName(dataset.NAME1);
  if (kunde) {
    // TODO: Check for updates
    return kunde;
  }
  const newKunde = new Kunde({
    ErstelltAm: dataset.SE_DATE
      ? new Date(
          parseInt(dataset.SE_DATE.slice(0, 4), 10),
          parseInt(dataset.SE_DATE.slice(4, 6), 10) - 1,
          parseInt(dataset.SE_DATE.slice(6, 8), 10)
        )
      : new Date(),
  });
  newKunde.Kundennummer = dataset.KUNDENNR ?? '';
  newKunde.Name = [dataset.NAME1, dataset.NAME2, dataset.NAME3].filter(
    (n) => n !== undefined && n !== ''
  );
  newKunde.Straße = dataset.STRASSE ?? '';
  if (dataset.ORT && dataset.PLZ) {
    newKunde.Ort =
      dataBase.read?.PLZbyOrtAndPLZ(dataset.ORT, dataset.PLZ) ??
      (dataBase.read?.PLZbyOrtAndPLZ('', '') as City);
  } else {
    newKunde.Ort = dataBase.read?.PLZbyOrtAndPLZ('', '') as City;
  }
  newKunde.Telefon = [dataset.TELEFON, dataset.TELEFON2].filter(
    (n) => n !== undefined && n !== ''
  );
  newKunde.Mobile = [dataset.MOBIL, dataset.MOBIL2].filter(
    (n) => n !== undefined && n !== ''
  );
  newKunde.Email = [dataset.MAIL_1, dataset.MAIL_2].filter(
    (n) => n !== undefined && n !== ''
  );

  dataBase.write?.NewKunde(newKunde);

  return newKunde;
}
