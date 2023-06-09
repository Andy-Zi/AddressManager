import Auto from '../../DataSchema/Auto';
import City from '../../DataSchema/City';
import Termin from '../../DataSchema/Termin';
import Kunde from '../../DataSchema/Kunde';
// eslint-disable-next-line import/no-cycle
import DatabaseBaseModule from './DatabaseModule';
// eslint-disable-next-line import/no-cycle

export default class DatabaseReader extends DatabaseBaseModule {
  // public TermineByIDs(ids: string[]): Termin[] {
  //   this.ReadDB({ termin: true });
  //   const termin =
  //     this.TerminDB.data?.Termin.filter((t) => ids.includes(t.id)) ?? [];
  //   return termin.map((t) => convertTerminDBToData(t));
  // }

  // public CityById(id: string): City {
  //   this.ReadDB();
  //   const city = this.CityDB.data?.City.find((c) => c.id === id) ?? null;
  //   if (city === null) {
  //     throw new Error(`City with id ${id} not found`);
  //   }
  //   return city;
  // }

  // public AutoByID(id: string): Auto {
  //   this.ReadDB({ auto: true });
  //   const auto = this.AutoDB.data?.Auto.find((a) => a.id === id) ?? null;
  //   if (auto === null) {
  //     throw new Error(`Auto with id ${id} not found`);
  //   }
  //   return convertAutoDBToData(this.db, auto);
  // }

  public KundeByName(name: string): Kunde | null {
    this.ReadDB();
    const res = this.KundenDB.data?.Kunde?.find((kunde) =>
      kunde.Name?.includes(name)
    );

    if (res !== undefined) {
      return res;
    }
    return null;
  }

  public PLZbyOrtAndPLZ(ort: string, plz: string): City | null {
    this.ReadDB();
    let res = this.CityDB.data?.City?.find(
      (p) =>
        p.PLZ === plz && (p.Ort?.includes(ort) || p.Ortsteil?.includes(ort))
    );
    if (res !== undefined) {
      return res;
    }
    res = this.CityDB.data?.City?.find((p) => p.PLZ === plz);
    if (res !== undefined) {
      return res;
    }
    res = this.CityDB.data?.City?.find(
      (p) => p.Ort?.includes(ort) || p.Ortsteil?.includes(ort)
    );
    if (res !== undefined) {
      return res;
    }
    return null;
  }

  // public KundenWithID(): { id: string; name: string }[] {
  //   this.ReadDB();
  //   const kunden =
  //     this.KundenDB.data?.Kunde.map((k) => ({
  //       id: k.id,
  //       name: k.Name?.join(', ') ?? '',
  //     })) ?? ([] as { id: string; name: string }[]);
  //   return kunden;
  // }

  public KundeByID(id: string): Kunde {
    this.ReadDB();
    const kunde = this.KundenDB.data?.Kunde.find((k) => k.id === id) ?? null;
    if (kunde === null) {
      throw new Error(`Kunde with id ${id} not found`);
    }
    return kunde;
  }

  public getKundenList(): Kunde[] {
    this.ReadDB();
    return this.KundenDB.data?.Kunde ?? [];
  }

  // public getAutosByKundeID(id: string): Auto[] {
  //   this.ReadDB({ auto: true });
  //   const DbKunde = this.KundenDB.data?.Kunde.find((k) => k.id === id) ?? null;
  //   if (DbKunde === null) {
  //     throw new Error(`Kunde with id ${id} not found`);
  //   }
  //   const kunde = convertKundeDBToData(this.db, DbKunde);
  //   return kunde.Autos;
  // }

  // public KundeByID(id: string): Kunde | null {
  //   this.ReadDB();
  //   const kunde = this.KundenDB.data?.Kunde?.find((a) => a.id === id);
  //   return kunde ?? null;
  // }

  // public PLZ(): PLZ[] {
  //   this.ReadDB({ plz: true });
  //   return this.PLZDB.data?.PLZ ?? [];
  // }

  // public PLZByID(id: string): PLZ | null {
  //   this.ReadDB({ plz: true });
  //   const plz = this.PLZDB.data?.PLZ?.find((a) => a.id === id);
  //   return plz ?? null;
  // }

  // public PLZByPLZ(Plz: string): PLZ[] {
  //   this.ReadDB({ plz: true });
  //   const plz = this.PLZDB.data?.PLZ?.filter((a) => a.plz.includes(Plz));
  //   return plz ?? [];
  // }

  // public PLZByOrt(ort: string): PLZ[] {
  //   this.ReadDB({ plz: true });
  //   const plz = this.PLZDB.data?.PLZ?.filter((a) => a.Ortsteil.includes(ort));
  //   if (plz) {
  //     return plz;
  //   }
  //   return this.PLZDB.data?.PLZ?.filter((a) => a.Ort.includes(ort)) ?? [];
  // }

  // public TerminByID(id: string): Termin | null {
  //   this.ReadDB({ termin: true });
  //   const termin = this.TerminDB.data?.Termin?.find((a) => a.id === id);
  //   return termin ?? null;
  // }

  // public TermineByID(id: string[]): Termin[] {
  //   this.ReadDB({ termin: true });
  //   const termine = this.TerminDB.data?.Termin?.filter((a) =>
  //     id.includes(a.id)
  //   );
  //   return termine ?? [];
  // }
}
