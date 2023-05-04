import Teil from '../../DataSchema/Teil';
import { DBTeil } from '../DBschema/DBAuto';

const convertTeilDBToData = (teil: DBTeil): Teil => {
  return new Teil({
    Bezeichnung: teil.Bezeichnung,
    Teilenummer: teil.Teilenummer,
    Notizen: teil.Notizen,
  });
};

const convertTeilDataToDB = (teil: Teil): DBTeil => {
  return {
    Bezeichnung: teil.Bezeichnung,
    Teilenummer: teil.Teilenummer,
    Notizen: teil.Notizen,
  };
};

export { convertTeilDBToData, convertTeilDataToDB };
