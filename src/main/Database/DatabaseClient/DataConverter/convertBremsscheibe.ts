import Bremsscheibe from '../../DataSchema/Bremsscheibe';
import { DBBremsscheibe } from '../DBschema/DBAuto';

const convertBremsscheibeDBToData = (
  dbBremsscheibe: DBBremsscheibe
): Bremsscheibe => {
  return new Bremsscheibe({
    Innenbelueftet: dbBremsscheibe.Innenbelueftet,
    Groeße: dbBremsscheibe.Groeße,
  });
};

const convertBremsscheibeDataToDB = (
  bremsscheibe: Bremsscheibe
): DBBremsscheibe => {
  return {
    Innenbelueftet: bremsscheibe.Innenbelueftet,
    Groeße: bremsscheibe.Groeße,
  };
};

export { convertBremsscheibeDBToData, convertBremsscheibeDataToDB };
