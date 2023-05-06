import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Kunde from '../../main/Database/DataSchema/Kunde';

type SingleViewProps = {
  ClientId: string;
};

export default function SingleKundeView() {
  const { ClientId } = useParams<SingleViewProps>();

  const [Client, setClient] = useState<Kunde>();

  const getClient = async (clientId: string) => {
    const kunde = await window.database?.readKundeByID(clientId);
    setClient(kunde);
  };

  useEffect(() => {
    if (ClientId) {
      getClient(ClientId);
    }
  }, [ClientId]);

  return (
    <div className="SingleView p-6">
      <h1 className="text-2xl font-bold mb-4">SingleView</h1>
      {Client ? (
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Name:</span> {Client.Name.join(' ')}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {Client.Straße},{' '}
            {Client.Ort.PLZ} {Client.Ort.Ort}, {Client.Ort.Ortsteil}
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            {Client.Telefon.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Mobile:</span>{' '}
            {Client.Mobile.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            {Client.Email.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Created at:</span> {Client.ErstelltAm}
          </p>
          <h2 className="text-xl font-semibold mb-2">Autos:</h2>
          <ul className="space-y-2">
            {Client.Autos.map((auto) => (
              <li
                key={auto.id}
                className="border border-gray-300 p-4 rounded-md"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold">{auto.Kennzeichen}</h3>
                  <p>
                    <span className="font-semibold">Manufacturer:</span>{' '}
                    {auto.Hersteller}
                  </p>
                  <p>
                    <span className="font-semibold">Model:</span> {auto.Modell}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
