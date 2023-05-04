import { LowSync } from '@commonify/lowdb';
// eslint-disable-next-line import/no-cycle
import DatabaseClient from '../DatabaseClient';
import {
  KundeDBSchema,
  AutoDBSchema,
  TerminDBSchema,
  CityDBSchema,
} from '../DBschema/DBSchema';

class DatabaseBaseModule {
  readonly db: DatabaseClient;

  readonly KundenDB: LowSync<KundeDBSchema>;

  readonly AutoDB: LowSync<AutoDBSchema>;

  readonly TerminDB: LowSync<TerminDBSchema>;

  readonly CityDB: LowSync<CityDBSchema>;

  public MemoryMode: boolean;

  constructor(
    db: DatabaseClient,
    autoDb: LowSync<AutoDBSchema>,
    kundenDb: LowSync<KundeDBSchema>,
    terminDb: LowSync<TerminDBSchema>,
    cityDb: LowSync<CityDBSchema>,
    MemoryMode = false
  ) {
    this.db = db;
    this.AutoDB = autoDb;
    this.KundenDB = kundenDb;
    this.TerminDB = terminDb;
    this.CityDB = cityDb;
    this.MemoryMode = MemoryMode;
  }

  public SaveDB({
    kunde = false,
    auto = false,
    termin = false,
    city = false,
  } = {}): void {
    if (!this.MemoryMode) {
      if (kunde) {
        this.KundenDB.write();
      }
      if (auto) {
        this.AutoDB.write();
      }
      if (termin) {
        this.TerminDB.write();
      }
      if (city) {
        this.CityDB.write();
      }
    }
  }

  public ReadDB({
    kunde = false,
    auto = false,
    termin = false,
    city = false,
  } = {}): void {
    if (!this.MemoryMode) {
      if (kunde) {
        this.KundenDB.read();
      }
      if (auto) {
        this.AutoDB.read();
      }
      if (termin) {
        this.TerminDB.read();
      }
      if (city) {
        this.CityDB.read();
      }
    }
  }
}

export default DatabaseBaseModule;
