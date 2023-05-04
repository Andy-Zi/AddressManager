import PA2kImport from '../../../PA2kImport/PA2kImport';

export default async function handlePA2kImport(
  pa2kPath: string,
  zipPath: string
): Promise<void> {
  const { db } = global.database;
  PA2kImport(pa2kPath, zipPath, db);
}
