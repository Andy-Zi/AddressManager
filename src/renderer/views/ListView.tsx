import React, { useEffect, useState } from 'react';
import ListViewKunde from '../../main/Database/DataSchema/ListViewKunde';

export default function ListView() {
  const [Kunden, setKunden] = useState<ListViewKunde[]>([]);
  const [fetchedAutos, setFetchedAutos] = useState<{ [key: string]: any[] }>(
    {}
  );
  const [expandedKunde, setExpandedKunde] = useState<string | null>(null);

  useEffect(() => {
    const fetchKunden = async () => {
      const result = await window.database?.getKundenList();
      if (result) {
        setKunden(result);
      }
    };

    fetchKunden();
  }, []);

  const toggleDropdown = async (id: string) => {
    if (expandedKunde === id) {
      setExpandedKunde(null);
    } else {
      setExpandedKunde(id);
      if (!fetchedAutos[id]) {
        const autos = await window.database?.getAutosByKundeID(id);
        setFetchedAutos((prev) => ({ ...prev, [id]: autos }));
      }
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
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{kunde.Name?.join(' ')}</h2>
              <p className="text-gray-600">ID: {kunde.id}</p>
              <p className="text-gray-600">
                Phone: {kunde.Telefon?.join(', ')}
              </p>
            </div>

            {expandedKunde === kunde.id && fetchedAutos[kunde.id] && (
              <div className="bg-gray-100 rounded-md mt-2 p-4 space-y-2">
                {fetchedAutos[kunde.id].map((auto) => (
                  <div
                    key={auto.id}
                    className="border border-gray-300 p-2 rounded-md"
                  >
                    <p className="text-gray-600">
                      Manufacturer: {auto.Hersteller}
                    </p>
                    <p className="text-gray-600">Model: {auto.Modell}</p>
                    <p className="text-gray-600">Type: {auto.Typ}</p>
                    <p className="text-gray-600">
                      License Plate: {auto.Kennzeichen}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
