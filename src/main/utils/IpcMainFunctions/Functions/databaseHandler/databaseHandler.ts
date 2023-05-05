import DatabaseClient from '../../../../Database/DatabaseClient/DatabaseClient';
import Kunde from '../../../../Database/DataSchema/Kunde';

export async function KundenList(): Promise<Kunde[]> {
  const db = new DatabaseClient();
  return db.read?.getKundenList() ?? [];
}

export function getKunde() {
  return false;
}
