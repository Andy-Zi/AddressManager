import { useOutletContext } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  EditableField,
  EditableMultipleField,
  EditableOrtField,
  UneditableField,
  EditableSchluesselNrField,
  EditableLeistungField,
  EditableTeileField,
} from 'renderer/components/EditableField';
import Teile from 'main/Database/DataSchema/Teile';
import Kunde from '../../main/Database/DataSchema/Kunde';
import Teil from '../../main/Database/DataSchema/Teil';

type SingleViewProps = {
  client: Kunde;
  carid?: string;
};

export default function SingleTeileView() {
  const obj = useOutletContext<SingleViewProps>();
  const Client = obj?.client;
  const CarID = obj?.carid;

  const [updatedTeile, setupdatedTeile] = useState<Teile>();
  const [newTeilName, setNewTeilName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setupdatedTeile({
      ...updatedTeile,
      [event.target.name]: event.target.value,
    });
  };

  const handleTeilChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedField = updatedTeile ? updatedTeile.TeilListe : [];
    updatedField[index][event.target.name] = event.target.value;
    setupdatedTeile({
      ...updatedTeile,
      TeilListe: updatedField,
    });
  };

  const handleAddField = () => {
    if (newTeilName.trim() !== '') {
      const updatedField = updatedTeile ? updatedTeile.TeilListe : [];
      const newTeil = new Teil({ Bezeichnung: newTeilName });
      updatedField.push(newTeil);
      setupdatedTeile({
        ...updatedTeile,
        TeilListe: updatedField,
      });
      setNewTeilName('');
    }
  };

  const handleNewTeilNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeilName(event.target.value);
  };

  const handleDeleteField = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setupdatedTeile({
      ...updatedTeile,
      TeilListe: updatedTeile?.TeilListe.filter(
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

  return (
    <div className="SingleView p-6">
      <h1 className="text-2xl font-bold mb-4">SingleView</h1>
      {updatedTeile ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <EditableField
            label="Ölbezeichnung"
            name="oelbezeichnung"
            value={updatedTeile.oelbezeichnung}
            handleOnChange={handleChange}
          />
          <EditableField
            label="Ölmenge"
            name="oelmenge"
            value={updatedTeile.oelmenge}
            handleOnChange={handleChange}
          />

          <EditableTeileField
            teile={updatedTeile.TeilListe}
            newTeilName={newTeilName}
            handleNewTeilNameChange={handleNewTeilNameChange}
            handleOnChange={handleTeilChange}
            handleAddField={handleAddField}
            handleDeleteField={handleDeleteField}
          />
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
