import DatabaseClient from '../../../../Database/DatabaseClient/DatabaseClient';
import Kunde from '../../../../Database/DataSchema/Kunde';

export async function KundenList(): Promise<Kunde[]> {
  const db = new DatabaseClient();
  return db.read?.getKundenList() ?? [];
}

export async function getKundeByID(id: string): Promise<Kunde> {
  const db = new DatabaseClient();
  try {
    return db.read?.KundeByID(id) ?? new Kunde({});
  } catch (e) {
    return new Kunde({});
  }
}
