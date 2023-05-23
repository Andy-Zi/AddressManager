import { useOutletContext } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  EditableField,
  EditableMultipleField,
  EditableOrtField,
  UneditableField,
  EditableSchluesselNrField,
  EditableLeistungField,
} from 'renderer/components/EditableField';
import Kunde from '../../main/Database/DataSchema/Kunde';
import Auto from '../../main/Database/DataSchema/Auto';
import Teile from 'main/Database/DataSchema/Teile';

type SingleViewProps = {
  client: Kunde;
  carid?: string;
};

export default function SingleTeileView() {
  const obj = useOutletContext<SingleViewProps>();
  const Client = obj?.client;
  const CarID = obj?.carid;

  const [updatedTeile, setupdatedTeile] = useState<Teile>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setupdatedTeile({
      ...updatedTeile,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setupdatedTeile({
      ...updatedTeile,
      [event.target.name]: [...updatedTeile[event.target.name], ''],
    });
  };

  const handleDeleteField = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setupdatedTeile({
      ...updatedTeile,
      [event.target.name]: updatedTeile[event.target.name].filter(
        (_, i) => i !== index
      ),
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Add your database update logic here
    // For instance, using an imaginary window.database.updateKunde method:
    // await window.database.updateKunde(updatedClient);
  };

  useEffect(() => {
    setupdatedTeile(Client?.Autos.find((auto) => auto.id === CarID)?.AutoTeile);
  }, [Client]);

// AutoTeile
// BremsscheibeHinten
// BremsscheibeVorne

  return (
    <div className="SingleView p-6">
      <h1 className="text-2xl font-bold mb-4">SingleView</h1>
      {updatedTeile ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <EditableField name="oelbezeichnung" value={updatedTeile.oelbezeichnung} onChange={handleChange} />
          <EditableField name="oelmenge" value={updatedTeile.oelmenge} onChange={handleChange} />
          {updatedTeile.TeilListe.map((teil, index) => (
          // TODO: Add Notizen
            <EditableField name={teil.Bezeichnung} value={teil.Teilenummer} onChange={handleChange} />
          ))}
          <button type="submit" className="btn">
            Save
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
