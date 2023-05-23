import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Kunde from '../../main/Database/DataSchema/Kunde';

export default function ListView() {
  const [Kunden, setKunden] = useState<Kunde[]>([]);
  const [expandedKunde, setExpandedKunde] = useState<string[]>([]);

  useEffect(() => {
    const fetchKunden = async () => {
      const result = await window.database?.getKundenList();
      if (result) {
        // check if kunde erstelltAm is a Date object else convert it to a Date object
        result.forEach((kunde) => {
          if (typeof kunde.ErstelltAm === 'string') {
            // eslint-disable-next-line no-param-reassign
            kunde.ErstelltAm = new Date(kunde.ErstelltAm);
          }
        });
        setKunden(result);
      }
    };

    fetchKunden();
  }, []);

  const toggleDropdown = (id: string) => {
    if (expandedKunde.includes(id)) {
      setExpandedKunde(expandedKunde.filter((kundeId) => kundeId !== id));
    } else {
      setExpandedKunde([...expandedKunde, id]);
    }
  };

  return (
    <div className="ListView">
      <h1 className="text-2xl font-bold mb-4">ListView</h1>
      <ul className="divide-y divide-gray-200">
        {Kunden.map((kunde) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            key={kunde.id}
            className="py-4"
            onClick={() => toggleDropdown(kunde.id)}
          >
            <Link to={`/singleView/${kunde.id}`} className="block">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">
                  {kunde.Name?.join(' ')}
                </h2>
                <p className="text-gray-600">
                  Erstellt am: {kunde.ErstelltAm.toLocaleDateString('de-DE')}
                </p>
                <p className="text-gray-600">
                  Phone: {kunde.Telefon?.join(', ')}
                </p>
                <p className="text-gray-600">
                  Street: {kunde.Straße} {kunde.Ort.PLZ} {kunde.Ort.Ort}
                </p>
              </div>
            </Link>
            <button
              type="button"
              className="btn"
              onClick={() => toggleDropdown(kunde.id)}
            >
              Autos
            </button>
            {expandedKunde.includes(kunde.id) && (
              <div className="bg-gray-100 rounded-md mt-2 p-4 space-y-2">
                {kunde.Autos.map((auto) => (
                  <Link to={`/singleView/${kunde.id}/${auto.id}`} key={auto.id}>
                    <div className="border border-gray-300 p-2 rounded-md">
                      <h3 className="text-xl font-semibold">
                        {auto.Kennzeichen}
                      </h3>
                      <p className="text-gray-600">
                        Manufacturer: {auto.Hersteller}
                      </p>
                      <p className="text-gray-600">Model: {auto.Modell}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
