import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Kunde from '../../main/Database/DataSchema/Kunde';
import Auto from '../../main/Database/DataSchema/Auto';

type SingleViewProps = {
  ClientId: string;
  CarID: string;
};

export default function SingleAutoView() {
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
    <div className="SingleView p-6">
      <h1 className="text-2xl font-bold mb-4">SingleView</h1>
      {Car ? (
        <div className="space-y-2">
          <p>
            <span className="font-semibold">License Plate:</span> {Car.Kennzeichen}
          </p>
          <p>
            <span className="font-semibold">Manufacturer:</span> {Car.Hersteller}
          </p>
          <p>
            <span className="font-semibold">Model:</span> {Car.Modell}
          </p>
          <p>
            <span className="font-semibold">Type:</span> {Car.Typ}
          </p>
          <p>
            <span className="font-semibold">ID Number:</span> {Car.IdentNr}
          </p>
          <p>
            <span className="font-semibold">Motor:</span> {Car.Motor}
          </p>
          <p>
            <span className="font-semibold">Transmission:</span> {Car.Getriebe}
          </p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
