import fs from 'fs';
import { join } from 'path';
import { LowSync, JSONFileSync } from '@commonify/lowdb';
// eslint-disable-next-line import/no-cycle
import DatabaseReader from './DatabaseModules/DatabaseReader';
// eslint-disable-next-line import/no-cycle
import DatabaseWriter from './DatabaseModules/DatabaseWriter';
import { KundeDBSchema, CityDBSchema } from './DBSchema';

export default class DatabaseClient {
  // eslint-disable-next-line no-use-before-define
  static instance: DatabaseClient;

  private KundenDB: LowSync<KundeDBSchema> | undefined = undefined;

  private CityDB: LowSync<CityDBSchema> | undefined = undefined;

  public read: DatabaseReader | undefined = undefined;

  public write: DatabaseWriter | undefined = undefined;

  public constructor(DBpath: string = '') {
    if (DatabaseClient.instance) {
      // eslint-disable-next-line no-constructor-return
      return DatabaseClient.instance;
    }
    this.init(DBpath);
  }

  public init(DBpath: string): void {
    if (!fs.existsSync(DBpath)) {
      fs.mkdirSync(DBpath);
    }

    this.KundenDB = new LowSync(
      new JSONFileSync(join(DBpath, 'KundenDB.json'))
    );
    this.CityDB = new LowSync(new JSONFileSync(join(DBpath, 'CityDB.json')));

    this.KundenDB.read();
    if (!this.KundenDB.data) {
      this.KundenDB.data = { Kunde: [] };
    }
    this.KundenDB.write();

    this.CityDB.read();
    if (!this.CityDB.data) {
      this.CityDB.data = { City: [] };
    }
    this.CityDB.write();

    this.read = new DatabaseReader(this, this.KundenDB, this.CityDB);
    this.write = new DatabaseWriter(this, this.KundenDB, this.CityDB);

    DatabaseClient.instance = this;
  }

  public enableMemoryMode(): void {
    if (!this.read || !this.write) {
      throw new Error(
        'DatabaseClient: MemoryMode can only be enabled after initialization'
      );
    }
    this.read.MemoryMode = true;
    this.write.MemoryMode = true;
  }

  public disableMemoryMode(): void {
    if (!this.read || !this.write) {
      throw new Error(
        'DatabaseClient: MemoryMode can only be disabled after initialization'
      );
    }
    this.read.MemoryMode = false;
    this.write.MemoryMode = false;
    this.write.SaveDB();
  }

  public clearDatabase(): void {
    if (!this.KundenDB || !this.CityDB) {
      throw new Error(
        'DatabaseClient: Database can only be cleared after initialization'
      );
    }
    this.KundenDB.data = { Kunde: [] };
    this.CityDB.data = { City: [] };
  }
}
