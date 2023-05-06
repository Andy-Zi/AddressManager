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

  public SaveDB({ kunde = false, city = false } = {}): void {
    if (!this.MemoryMode) {
      if (kunde) {
        this.KundenDB.write();
      }
      if (city) {
        this.CityDB.write();
      }
    }
  }

  public ReadDB({ kunde = false, city = false } = {}): void {
    if (!this.MemoryMode) {
      if (kunde) {
        this.KundenDB.read();
      }
      if (city) {
        this.CityDB.read();
      }
    }
  }
}

export default DatabaseBaseModule;
