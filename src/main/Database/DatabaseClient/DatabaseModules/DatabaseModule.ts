import { LowSync } from '@commonify/lowdb';
// eslint-disable-next-line import/no-cycle
import DatabaseClient from '../DatabaseClient';
import { KundeDBSchema, CityDBSchema } from '../DBSchema';

class DatabaseBaseModule {
  readonly db: DatabaseClient;

  readonly KundenDB: LowSync<KundeDBSchema>;

  readonly CityDB: LowSync<CityDBSchema>;

  public MemoryMode: boolean;

  constructor(
    db: DatabaseClient,
    kundenDb: LowSync<KundeDBSchema>,
    cityDb: LowSync<CityDBSchema>,
    MemoryMode = false
  ) {
    this.db = db;
    this.KundenDB = kundenDb;
    this.CityDB = cityDb;
    this.MemoryMode = MemoryMode;
  }

  public SaveDB(): void {
    if (!this.MemoryMode) {
      this.KundenDB.write();
      this.CityDB.write();
    }
  }

  public ReadDB(): void {
    if (!this.MemoryMode) {
      this.KundenDB.read();
      this.CityDB.read();
    }
  }
}

export default DatabaseBaseModule;
