import DatabaseClient from '../../../Database/DatabaseClient/DatabaseClient';
import Termin from '../../../Database/DataSchema/Termin';
import TerminDBT from '../fileReader/TERMIN_DBT';

export default function initTermin(
  dataBase: DatabaseClient,
  autoLookup: { [k: number]: string },
  dataset: { [k: string]: string },
  terminDb: TerminDBT
): Termin {
  const appointment = new Termin({});

  let kmTitle: string[] | null = null;
  if (dataset.BETREFF) {
    if (dataset.BETREFF.includes('km. ')) {
      kmTitle = dataset.BETREFF.split('km. ');
    } else if (dataset.BETREFF.includes('km ')) {
      kmTitle = dataset.BETREFF.split('km ');
    } else if (dataset.BETREFF.includes('k ')) {
      kmTitle = dataset.BETREFF.split('k ');
    }
  }

  if (kmTitle) {
    appointment.Title = kmTitle[1].trim();
    appointment.Kilometerstand = parseInt(kmTitle[0].trim(), 10);
  } else {
    appointment.Title = dataset.BETREFF;
  }

  // Get description from dbt file
  appointment.Beschreibung = dataset.MEMO1
    ? terminDb.getNote(Number(dataset.MEMO1))
    : '';

  // Parse date of appointment
  appointment.Datum = dataset.START_D
    ? new Date(
        parseInt(dataset.START_D.slice(0, 4), 10),
        parseInt(dataset.START_D.slice(4, 6), 10) - 1,
        parseInt(dataset.START_D.slice(6, 8), 10)
      )
    : null;

  // Get owner
  if (autoLookup[Number(dataset.P_NUMER)]) {
    const auto = dataBase.read?.AutoByID(autoLookup[Number(dataset.P_NUMER)]);
    if (auto) {
      auto.Termine.push(appointment);
      dataBase.write?.UpdateAuto(auto);
    } else {
      throw new Error("Can't find car");
    }
  } else {
    throw new Error("Can't find car");
  }
  return appointment;
}
