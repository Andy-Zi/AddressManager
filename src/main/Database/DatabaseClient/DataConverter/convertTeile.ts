import Teile from '../../DataSchema/Teile';
import { DBTeile } from '../DBschema/DBAuto';
import { convertTeilDataToDB, convertTeilDBToData } from './convertTeil';

const convertTeileDBToData = (teil: DBTeile): Teile => {
  return new Teile({
    oelmenge: teil.oelmenge,
    oelbezeichnung: teil.oelbezeichnung,
    TeilListe: teil.TeilListe.map((t) => convertTeilDBToData(t)),
  });
};

const convertTeileDataToDB = (teil: Teile): DBTeile => {
  return {
    oelmenge: teil.oelmenge,
    oelbezeichnung: teil.oelbezeichnung,
    TeilListe: teil.TeilListe.map((t) => convertTeilDataToDB(t)),
  };
};

export { convertTeileDBToData, convertTeileDataToDB };
