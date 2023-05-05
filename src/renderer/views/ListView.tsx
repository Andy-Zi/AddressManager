import React, { useEffect, useState } from 'react';
import Kunde from '../../main/Database/DataSchema/Kunde';

export default function ListView() {
  const [Kunden, setKunden] = useState<Kunde[]>([]);

  useEffect(() => {
    const fetchKunden = async () => {
      const result = await window.database?.getKundenList();
      if (result) {
        setKunden(result);
      }
    };

    fetchKunden();
  }, []);

  // useEffect(() => {
  //   console.log(Kunden);
  // }, [Kunden]);

  return (
    <div className="ListView p-4">
      <h1 className="text-2xl font-semibold mb-6">ListView</h1>
      <ul className="space-y-6">
        {Kunden.map((kunde) => (
          <li key={kunde.id} className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">{kunde.Name.join(' ')}</h2>
            <p className="text-gray-600">Customer ID: {kunde.id}</p>
            <p className="text-gray-600">
              Created On: {new Date(kunde.ErstelltAm).toLocaleDateString()}
            </p>
            <p className="text-gray-600">City: {kunde.Ort.Ort}</p>
            <p className="text-gray-600">Street: {kunde.Straße}</p>
            {kunde.Autos.map((auto, index) => (
              <div key={auto.id} className="mt-4">
                <h3 className="text-lg font-semibold">Auto {index + 1}</h3>
                <p className="text-gray-600">Manufacturer: {auto.Hersteller}</p>
                <p className="text-gray-600">Model: {auto.Modell}</p>
                <p className="text-gray-600">
                  License Plate: {auto.Kennzeichen}
                </p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
