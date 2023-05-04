import City from '../../DataSchema/City';
import DBCity from '../DBschema/DBCity';

const convertCityDBtoData = (dbCity: DBCity): City => {
  return new City({
    id: dbCity.id,
    PLZ: dbCity.PLZ,
    Ort: dbCity.Ort,
    Ortsteil: dbCity.Ortsteil ?? undefined,
  });
};

const convertCityDataToDB = (city: City): DBCity => {
  return {
    id: city.id,
    PLZ: city.PLZ,
    Ort: city.Ort,
    Ortsteil: city.Ortsteil ?? undefined,
  };
};

export { convertCityDBtoData, convertCityDataToDB };
