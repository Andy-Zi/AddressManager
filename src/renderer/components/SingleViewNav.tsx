import { get } from 'http';
import Auto from 'main/Database/DataSchema/Auto';
import Kunde from 'main/Database/DataSchema/Kunde';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

type SingleViewProps = {
  ClientId: string;
  CarID?: string;
};

export default function SingleViewNav() {
  const { ClientId, CarID } = useParams<SingleViewProps>();

  const [Client, setClient] = useState<Kunde>();
  const [Car, setCar] = useState<Auto>();

  const getClient = async (clientId: string) => {
    const kunde = await window.database?.readKundeByID(clientId);
    setClient(kunde);
    setCar(kunde?.Autos.find((auto) => auto.id === CarID));
  };

  useEffect(() => {
    if (ClientId) {
      getClient(ClientId);
    }
  }, [ClientId]);

  return (
    <div className="SingleViewNav flex">
      <nav className="bg-gray-100 w-1/4 h-screen py-4">
        <ul className="space-y-4">
          <li>
            <Link
              to={`/singleView/${ClientId}`}
              className={`block p-2 rounded-md ${
                !CarID ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
              }`}
            >
              Kunde
            </Link>
          </li>
          {Client?.Autos.map((auto) => (
            <li key={auto.id}>
              <Link
                to={`/singleView/${ClientId}/${auto.id}`}
                className={`block p-2 rounded-md ${
                  CarID === auto.id
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-blue-200'
                }`}
              >
                {auto.Kennzeichen}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-3/4 h-screen">
        <Outlet context={{ client: Client, carid: CarID }} />
      </div>
    </div>
  );
}
