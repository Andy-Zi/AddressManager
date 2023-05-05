import DatabaseClient from '../../../../Database/DatabaseClient/DatabaseClient';
import PA2kImport from '../../../PA2kImport/PA2kImport';

export default async function handlePA2kImport(
  pa2kPath: string,
  zipPath: string
): Promise<boolean> {
  const db = new DatabaseClient();
  return PA2kImport(pa2kPath, zipPath, db);
}
