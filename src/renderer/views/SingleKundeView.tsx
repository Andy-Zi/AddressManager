/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  EditableField,
  EditableMultipleField,
  EditableOrtField,
  UneditableField,
} from 'renderer/components/EditableField';
import Kunde from '../../main/Database/DataSchema/Kunde';

type SingleViewProps = {
  client: Kunde;
  carid?: string;
};

export default function SingleKundeView() {
  const obj = useOutletContext<SingleViewProps>();
  const Client = obj?.client;

  const [updatedClient, setUpdatedClient] = useState<Kunde>(Client);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number = -1
  ) => {
    if (index === -1) {
      setUpdatedClient({
        ...updatedClient,
        [event.target.name]: event.target.value,
      });
    } else {
      setUpdatedClient({
        ...updatedClient,
        [event.target.name]: updatedClient[event.target.name].map(
          (value, i) => {
            if (i === index) {
              return event.target.value;
            }
            return value;
          }
        ),
      });
    }
  };

  const handleAddField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedClient({
      ...updatedClient,
      [event.target.name]: [...updatedClient[event.target.name], ''],
    });
  };

  const handleDeleteField = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setUpdatedClient({
      ...updatedClient,
      [event.target.name]: updatedClient[event.target.name].filter(
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
    if (Client) {
      setUpdatedClient(Client);
    }
  }, [Client]);

  return (
    <div className="SingleView p-6">
      <h1 className="text-2xl font-bold mb-4">SingleView</h1>
      {updatedClient ? (
        <>
          <form onSubmit={handleSubmit} className="space-y-2">
            <EditableMultipleField
              label="Name"
              name="Name"
              value={updatedClient.Name}
              handleOnChange={handleChange}
              handleAddField={handleAddField}
              handleDeleteField={handleDeleteField}
            />
            <EditableField
              label="Kundennummer"
              name="Kundennummer"
              value={updatedClient.Kundennummer}
              handleOnChange={handleChange}
            />
            <EditableMultipleField
              label="Telefon"
              name="Telefon"
              value={updatedClient.Telefon}
              handleOnChange={handleChange}
              handleAddField={handleAddField}
              handleDeleteField={handleDeleteField}
            />
            <EditableMultipleField
              label="Mobile"
              name="Mobile"
              value={updatedClient.Mobile}
              handleOnChange={handleChange}
              handleAddField={handleAddField}
              handleDeleteField={handleDeleteField}
            />
            <EditableMultipleField
              label="Email"
              name="Email"
              value={updatedClient.Email}
              handleOnChange={handleChange}
              handleAddField={handleAddField}
              handleDeleteField={handleDeleteField}
            />
            <UneditableField
              label="Erstellt am"
              name="ErstelltAm"
              value={updatedClient.ErstelltAm.toLocaleDateString('de-DE')}
            />
            <EditableField
              label="Straße"
              name="Straße"
              value={updatedClient.Straße}
              handleOnChange={handleChange}
            />
            <EditableOrtField
              label="Ort"
              ort={updatedClient.Ort}
              handleOnChange={handleChange}
            />
            <button type="submit" className="btn">
              Save
            </button>
          </form>
          <h2 className="text-xl font-semibold mb-2">Autos:</h2>
          <ul className="space-y-2">
            {updatedClient.Autos.map((auto) => (
              <li
                key={auto.id}
                className="border border-gray-300 p-4 rounded-md"
              >
                <Link to={`/singleView/${Client.id}/${auto.id}`}>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{auto.Kennzeichen}</h3>
                    <p>
                      <span className="font-semibold">Manufacturer:</span>{' '}
                      {auto.Hersteller}
                    </p>
                    <p>
                      <span className="font-semibold">Model:</span>{' '}
                      {auto.Modell}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
