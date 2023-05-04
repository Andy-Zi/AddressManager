// global.d.ts
import DatabaseClient from '../main/Database/DatabaseClient/DatabaseClient';

declare global {
  namespace NodeJS {
    interface Global {
      database: DatabaseClient;
    }
  }
}
