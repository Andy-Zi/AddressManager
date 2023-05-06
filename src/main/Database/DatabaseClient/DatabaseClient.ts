import fs from 'fs';
import { join } from 'path';
import { LowSync, JSONFileSync } from '@commonify/lowdb';
// eslint-disable-next-line import/no-cycle
import DatabaseReader from './DatabaseModules/DatabaseReader';
// eslint-disable-next-line import/no-cycle
import DatabaseWriter from './DatabaseModules/DatabaseWriter';
import {
  KundeDBSchema,
  AutoDBSchema,
  TerminDBSchema,
  CityDBSchema,
} from './DBschema/DBSchema';

export default class DatabaseClient {
  // eslint-disable-next-line no-use-before-define
  static instance: DatabaseClient;

  private KundenDB: LowSync<KundeDBSchema> | undefined = undefined;

  private AutoDB: LowSync<AutoDBSchema> | undefined = undefined;

  private TerminDB: LowSync<TerminDBSchema> | undefined = undefined;

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
    this.AutoDB = new LowSync(new JSONFileSync(join(DBpath, 'AutoDB.json')));
    this.TerminDB = new LowSync(
      new JSONFileSync(join(DBpath, 'TerminDB.json'))
    );
    this.CityDB = new LowSync(new JSONFileSync(join(DBpath, 'CityDB.json')));

    this.KundenDB.read();
    if (!this.KundenDB.data) {
      this.KundenDB.data = { Kunde: [] };
    }
    this.KundenDB.write();

    this.AutoDB.read();
    if (!this.AutoDB.data) {
      this.AutoDB.data = { Auto: [] };
    }
    this.AutoDB.write();

    this.TerminDB.read();
    if (!this.TerminDB.data) {
      this.TerminDB.data = { Termin: [] };
    }
    this.TerminDB.write();

    this.CityDB.read();
    if (!this.CityDB.data) {
      this.CityDB.data = { City: [] };
    }
    this.CityDB.write();

    this.read = new DatabaseReader(
      this,
      this.AutoDB,
      this.KundenDB,
      this.TerminDB,
      this.CityDB
    );
    this.write = new DatabaseWriter(
      this,
      this.AutoDB,
      this.KundenDB,
      this.TerminDB,
      this.CityDB
    );

    DatabaseClient.instance = this;
  }

  public enableMemoryMode(): void {
    this.read.MemoryMode = true;
    this.write.MemoryMode = true;
  }

  public disableMemoryMode(): void {
    this.read.MemoryMode = false;
    this.write.MemoryMode = false;
    this.write.SaveDB({ auto: true, kunde: true, termin: true, city: true });
  }

  public clearDatabase(): void {
    this.KundenDB.data = { Kunde: [] };
    this.AutoDB.data = { Auto: [] };
    this.TerminDB.data = { Termin: [] };
    this.CityDB.data = { City: [] };
  }
}
