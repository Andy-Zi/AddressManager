import City from '../DataSchema/City';
import Kunde from '../DataSchema/Kunde';

export type KundeDBSchema = {
  Kunde: Kunde[];
};

export type CityDBSchema = {
  City: City[];
};
