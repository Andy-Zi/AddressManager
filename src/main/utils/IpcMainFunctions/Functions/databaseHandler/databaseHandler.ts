import DatabaseClient from '../../../../Database/DatabaseClient/DatabaseClient';
import ListViewKunde from '../../../../Database/DataSchema/ListViewKunde';
import Auto from '../../../../Database/DataSchema/Auto';

export async function KundenList(): Promise<ListViewKunde[]> {
  const db = new DatabaseClient();
  return db.read?.getKundenList() ?? [];
}

export async function getAutosbyKundeID(id: string): Promise<Auto[]> {
  const db = new DatabaseClient();
  try {
    return db.read?.getAutosByKundeID(id) ?? [];
  } catch (e) {
    return [];
  }
}
