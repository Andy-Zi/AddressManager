import { useOutletContext } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  DragAndDropField,
  EditableField,
  EditableMultipleField,
  EditableOrtField,
  UneditableField,
  EditableSchluesselNrField,
  EditableLeistungField,
  EditableBooleanField,
  EditableDropdownField,
} from 'renderer/components/EditableField';
import Kunde from '../../main/Database/DataSchema/Kunde';
import Auto from '../../main/Database/DataSchema/Auto';

type SingleViewProps = {
  client: Kunde;
  carid?: string;
};

export default function SingleAutoView() {
  const obj = useOutletContext<SingleViewProps>();
  const Client = obj?.client;
  const CarID = obj?.carid;

  const [updatedCar, setupdatedCar] = useState<Auto>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index:number = -1) => {
    if (event.target.type === 'checkbox') {
      const curValue = updatedCar[event.target.name];

      if (curValue !== event.target.value) {
        setupdatedCar({
          ...updatedCar,
          [event.target.name]: event.target.value,
        });
      } else {
        setupdatedCar({
          ...updatedCar,
          [event.target.name]: null,
        });
      }
    } else {
      if (index === -1) {
        setupdatedCar({
          ...updatedCar,
          [event.target.name]: event.target.value,
        });
      } else {
        setupdatedCar({
          ...updatedCar,
          [event.target.name]: updatedCar[event.target.name].map((value, i) => {
              if (i === index) {
                return event.target.value;
              }
              return value;
            }
          ),
        });
      }
    }
  };

  const handleAddField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setupdatedCar({
      ...updatedCar,
      [event.target.name]: [...updatedCar[event.target.name], ''],
    });
  };

  const handleDeleteField = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setupdatedCar({
      ...updatedCar,
      [event.target.name]: updatedCar[event.target.name].filter(
        (_, i) => i !== index
      ),
    });
  };

  const handleOnDrop = (event: React.DragEvent<HTMLDivElement>,path) => {
    setupdatedCar({
      ...updatedCar,
      [event.target.name]: [...updatedCar[event.target.name], path],
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Add your database update logic here
    // For instance, using an imaginary window.database.updateKunde method:
    // await window.database.updateKunde(updatedClient);
  };

  useEffect(() => {
    setupdatedCar(Client?.Autos.find((auto) => auto.id === CarID));
  }, [Client]);

  // TODO: BremsscheibeHinten
  // TODO: BremsscheibeVorne

  return (
    <div className="SingleView p-6">
      <h1 className="text-2xl font-bold mb-4">SingleView</h1>
      {updatedCar ? (
        <>
          <form onSubmit={handleSubmit} className="space-y-2">
            <EditableField
              name="Kennzeichen"
              value={updatedCar.Kennzeichen}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              name="Verkauft"
              value={updatedCar.Verkauft}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Hersteller"
              value={updatedCar.Hersteller}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Typ"
              value={updatedCar.Typ}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Modell"
              value={updatedCar.Modell}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Modelljahr"
              value={updatedCar.Modelljahr}
              handleOnChange={handleChange}
            />
            <EditableField
              name="IdentNr"
              value={updatedCar.IdentNr}
              handleOnChange={handleChange}
            />
            <EditableSchluesselNrField
              name="Schlüsselnr."
              name1="SchluesselNrZu1"
              value1={updatedCar.SchluesselNrZu1}
              name2="SchluesselNrZu2"
              value2={updatedCar.SchluesselNrZu2}
              name3="SchluesselNrZu31"
              value3={updatedCar.SchluesselNrZu31}
              handleOnChange={handleChange}
            />
            <EditableLeistungField
              name1="Leistung"
              value1={updatedCar.Leistung}
              name2="MotorumdrehungenProMinute"
              value2={updatedCar.MotorumdrehungenProMinute}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Hubraum"
              value={updatedCar.Hubraum}
              handleOnChange={handleChange}
            />
            {/* TODO: Datepicker */}
            <EditableField
              name="Zulassung"
              value={new Date(updatedCar.Zulassung).toLocaleDateString('de-DE')}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Motornummer"
              value={updatedCar.Motornummer}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Getriebenummer"
              value={updatedCar.Getriebenummer}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Farbe"
              value={updatedCar.Farbe}
              handleOnChange={handleChange}
            />
            {/* TODO: Checkboxes with multiple values (Diesel, Benzin, Elektro, Hybrid, ...) */}
            <EditableField
              name="Motorart"
              value={updatedCar.Motorart}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              name="Servolenkung"
              value={updatedCar.Servolenkung}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              name="Klimaanlage"
              value={updatedCar.Klimaanlage}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              name="ABS"
              value={updatedCar.ABS}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              name="Allradantrieb"
              value={updatedCar.Allradantrieb}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              name="ZentralVerrieglung"
              value={updatedCar.ZentralVerrieglung}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              name="AnhaengerKupplung"
              value={updatedCar.AnhaengerKupplung}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Tueren"
              value={updatedCar.Tueren}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              name="Karosserieform"
              value={updatedCar.Karosserieform}
              options={[
                '',
                'Cabrio',
                'Coupe',
                'Jeep',
                'Kombi',
                'Limousine',
                'Pickup',
                'Roadster',
                'SUV',
                'Transporter',
                'Van',
              ]}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              name="FelgenLoecher"
              value={updatedCar.FelgenLoecher}
              options={['', '3', '4', '5', '6', '8', '10']}
              handleOnChange={handleChange}
            />
            {/* TODO: Datepicker */}
            <EditableField
              name="HuAu"
              value={new Date(updatedCar.HuAu).toLocaleDateString('de-DE', {
                month: 'long',
                year: 'numeric',
              })}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              name="Motor"
              value={updatedCar.Motor}
              options={[
                '',
                '1 Zylinder',
                '2 Zylinder',
                '3 Zylinder',
                '4 Zylinder',
                '5 Zylinder',
                'E Zylinder',
                '8 Zylinder',
                '1 0 Zylinder',
                '1 2 Zylinder',
                'Kreiskolbenmotor',
              ]}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              name="Getriebe"
              value={updatedCar.Getriebe}
              options={[
                '',
                '3 Gang',
                '4 Gang',
                'S Gang',
                '6 Gang',
                'OSG',
                'OSG 6 Gang',
                'DSG 7 Gang',
                'OSG 8 Gang',
                'Automatik',
                'Variomatik',
              ]}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              name="Partikelfilter"
              value={updatedCar.Partikelfilter}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              name="Heck"
              value={updatedCar.Heck}
              handleOnChange={handleChange}
              options={['Stufenheck', 'Schrägheck', 'Steilheck', '']}
            />
            <EditableField
              name="Reifen"
              value={updatedCar.Reifen}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Festsetllbremse"
              value={updatedCar.Feststellbremse}
              handleOnChange={handleChange}
            />
            <EditableField
              name="KlimaanlageKaeltemittel"
              value={updatedCar.KlimaanlageKaeltemittel}
              handleOnChange={handleChange}
            />
            <EditableField
              name="MotorsteuerungTyp"
              value={updatedCar.MotorsteuerungTyp}
              handleOnChange={handleChange}
            />
            <EditableField
              name="MotorsteuerungWechselintervallKm"
              value={updatedCar.MotorsteuerungWechselintervallKm}
              handleOnChange={handleChange}
            />
            <EditableField
              name="MotorsteuerungWechselintervallZeitJahr"
              value={updatedCar.MotorsteuerungWechselintervallZeitJahr}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Notiz"
              value={updatedCar.Notiz}
              handleOnChange={handleChange}
            />
            <EditableField
              name="Kommentar"
              value={updatedCar.Kommentar}
              handleOnChange={handleChange}
            />
            <DragAndDropField
              name="Dokumente"
              value={updatedCar.Dokumente}
              handleOnChange={handleChange}
              handleAddField={handleAddField}
              handleDeleteField={handleDeleteField}
              handleOnDrop={handleOnDrop}
            />
            <button type="submit" className="btn">
              Save
            </button>
          </form>
          <h2 className="text-xl font-semibold mb-2">Termine:</h2>
          <ul className="space-y-2">
            {updatedCar.Termine.map((termin) => (
              <li
                key={termin.id}
                className="border border-gray-300 p-4 rounded-md"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold">{termin.Title}</h3>
                  <p>
                    <span className="font-semibold">Datum:</span> {termin.Datum}
                  </p>
                  <p>
                    <span className="font-semibold">Beschreibung:</span>{' '}
                    {termin.Beschreibung}
                  </p>
                  <p>
                    <span className="font-semibold">Kilometerstand:</span>{' '}
                    {termin.Kilometerstand}
                  </p>
                </div>
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
