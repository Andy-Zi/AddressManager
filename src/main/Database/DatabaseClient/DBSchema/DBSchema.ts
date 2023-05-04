import DBKunde from './DBKunde';
import DBAuto from './DBAuto';
import DBTermin from './DBTermin';
import DBCity from './DBCity';

export type KundeDBSchema = {
  Kunde: DBKunde[];
};

export type AutoDBSchema = {
  Auto: DBAuto[];
};

export type TerminDBSchema = {
  Termin: DBTermin[];
};

export type CityDBSchema = {
  City: DBCity[];
};
