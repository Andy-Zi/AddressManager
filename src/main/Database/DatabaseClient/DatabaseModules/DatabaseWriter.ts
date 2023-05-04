// eslint-disable-next-line import/no-cycle
import DatabaseBaseModule from './DatabaseModule';

import Auto from '../../DataSchema/Auto';
import City from '../../DataSchema/City';
import Termin from '../../DataSchema/Termin';
import Kunde from '../../DataSchema/Kunde';

// eslint-disable-next-line import/no-cycle
import { convertAutoDataToDB } from '../DataConverter/convertAuto';
import { convertTerminDataToDB } from '../DataConverter/convertTermin';
// eslint-disable-next-line import/no-cycle
import { convertKundeDataToDB } from '../DataConverter/convertKunde';
import { convertCityDataToDB } from '../DataConverter/convertCity';

export default class DatabaseWriter extends DatabaseBaseModule {
  public NewAuto(auto: Auto): void {
    this.ReadDB({ auto: true });
    this.AutoDB.data?.Auto?.push(convertAutoDataToDB(auto));
    this.SaveDB({ auto: true });
  }

  public NewManyAuto(auto: Auto[]): void {
    this.ReadDB({ auto: true });
    for (let i = 0; i < auto.length; i += 1) {
      this.AutoDB.data?.Auto?.push(convertAutoDataToDB(auto[i]));
    }
    this.SaveDB({ auto: true });
  }

  public UpdateAuto(auto: Auto): void {
    this.ReadDB({ auto: true });
    const index = this.AutoDB.data?.Auto?.findIndex((a) => a.id === auto.id);
    if (index !== undefined && index !== -1) {
      this.AutoDB.data?.Auto?.splice(index, 1, convertAutoDataToDB(auto));
    }
    this.SaveDB({ auto: true });
  }

  public DeleteAuto(auto: Auto): void {
    this.ReadDB({ auto: true });
    const index = this.AutoDB.data?.Auto?.findIndex((a) => a.id === auto.id);
    if (index !== undefined && index !== -1) {
      this.AutoDB.data?.Auto?.splice(index, 1);
    }
    this.SaveDB({ auto: true });
  }

  public NewKunde(kunde: Kunde): void {
    this.ReadDB({ kunde: true });
    this.KundenDB.data?.Kunde?.push(convertKundeDataToDB(kunde));
    this.SaveDB({ kunde: true });
  }

  public NewManyKunde(kunde: Kunde[]): void {
    this.ReadDB({ kunde: true });
    for (let i = 0; i < kunde.length; i += 1) {
      this.KundenDB.data?.Kunde?.push(convertKundeDataToDB(kunde[i]));
    }
    this.SaveDB({ kunde: true });
  }

  public UpdateKunde(kunde: Kunde): void {
    this.ReadDB({ kunde: true });
    const index = this.KundenDB.data?.Kunde?.findIndex(
      (k) => k.id === kunde.id
    );
    if (index !== undefined && index !== -2) {
      this.KundenDB.data?.Kunde?.splice(index, 1, convertKundeDataToDB(kunde));
    }
    this.SaveDB({ kunde: true });
  }

  public DeleteKunde(kunde: Kunde): void {
    this.ReadDB({ kunde: true });
    const index = this.KundenDB.data?.Kunde?.findIndex(
      (k) => k.id === kunde.id
    );
    if (index !== undefined && index !== -2) {
      this.KundenDB.data?.Kunde?.splice(index, 0);
    }
    this.SaveDB({ kunde: true });
  }

  public NewCity(city: City): void {
    this.ReadDB({ city: true });
    this.CityDB.data?.City?.push(convertCityDataToDB(city));
    this.SaveDB({ city: true });
  }

  public NewManyCity(cities: City[]): void {
    this.ReadDB({ city: true });
    for (let i = 0; i < cities.length; i += 1) {
      this.CityDB.data?.City?.push(convertCityDataToDB(cities[i]));
    }
    this.SaveDB({ city: true });
  }

  public UpdateCity(city: City): void {
    this.ReadDB({ city: true });
    const index = this.CityDB.data?.City?.findIndex((c) => c.id === city.id);
    if (index !== undefined && index !== -1) {
      this.CityDB.data?.City?.splice(index, 1, convertCityDataToDB(city));
    }
    this.SaveDB({ city: true });
  }

  public DeleteCity(city: City): void {
    this.ReadDB({ city: true });
    const index = this.CityDB.data?.City?.findIndex((c) => c.id === city.id);
    if (index !== undefined && index !== -1) {
      this.CityDB.data?.City?.splice(index, 1);
    }
    this.SaveDB({ city: true });
  }

  public NewTermin(termin: Termin): void {
    this.ReadDB({ termin: true });
    this.TerminDB.data?.Termin?.push(convertTerminDataToDB(termin));
    this.SaveDB({ termin: true });
  }

  public NewManyTermin(termin: Termin[]): void {
    this.ReadDB({ termin: true });
    for (let i = 0; i < termin.length; i += 1) {
      this.TerminDB.data?.Termin?.push(convertTerminDataToDB(termin[i]));
    }
    this.SaveDB({ termin: true });
  }

  public UpdateTermin(termin: Termin): void {
    this.ReadDB({ termin: true });
    const index = this.TerminDB.data?.Termin?.findIndex(
      (t) => t.id === termin.id
    );
    if (index !== undefined && index !== -1) {
      this.TerminDB.data?.Termin?.splice(
        index,
        1,
        convertTerminDataToDB(termin)
      );
    }
    this.SaveDB({ termin: true });
  }

  public DeleteTermin(termin: Termin): void {
    this.ReadDB({ termin: true });
    const index = this.TerminDB.data?.Termin?.findIndex(
      (t) => t.id === termin.id
    );
    if (index !== undefined && index !== -1) {
      this.TerminDB.data?.Termin?.splice(index, 1);
    }
    this.SaveDB({ termin: true });
  }
}
