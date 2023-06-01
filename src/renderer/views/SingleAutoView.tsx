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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number = -1
  ) => {
    if (event.target.type === 'number') {
      if (!event.target.value) {
        return;
      }
    }
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
    } else if (index === -1) {
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
        }),
      });
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

  const handleOnDrop = (event: React.DragEvent<HTMLDivElement>, path) => {
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
              label="Kennzeichen"
              name="Kennzeichen"
              value={updatedCar.Kennzeichen}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="Verkauft"
              name="Verkauft"
              value={updatedCar.Verkauft}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Hersteller"
              name="Hersteller"
              value={updatedCar.Hersteller}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Typ"
              name="Typ"
              value={updatedCar.Typ}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Modell"
              name="Modell"
              value={updatedCar.Modell}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Modelljahr"
              name="Modelljahr"
              value={updatedCar.Modelljahr}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Fahrgestellnummer"
              name="IdentNr"
              value={updatedCar.IdentNr}
              handleOnChange={handleChange}
            />
            <EditableSchluesselNrField
              label="Schlüsselnr."
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
              label="Leistung"
              name1="Leistung"
              value1={updatedCar.Leistung}
              name2="MotorumdrehungenProMinute"
              value2={updatedCar.MotorumdrehungenProMinute}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Hubraum"
              name="Hubraum"
              value={updatedCar.Hubraum}
              handleOnChange={handleChange}
            />
            {/* TODO: Datepicker */}
            <EditableField
              label="Zulassung"
              name="Zulassung"
              value={new Date(updatedCar.Zulassung).toLocaleDateString('de-DE')}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Motornummer"
              name="Motornummer"
              value={updatedCar.Motornummer}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Getriebenummer"
              name="Getriebenummer"
              value={updatedCar.Getriebenummer}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Farbe"
              name="Farbe"
              value={updatedCar.Farbe}
              handleOnChange={handleChange}
            />
            {/* TODO: Checkboxes with multiple values (Diesel, Benzin, Elektro, Hybrid, ...) */}
            <EditableField
              label="Motorart"
              name="Motorart"
              value={updatedCar.Motorart}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="Servolenkung"
              name="Servolenkung"
              value={updatedCar.Servolenkung}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="Klimaanlage"
              name="Klimaanlage"
              value={updatedCar.Klimaanlage}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="ABS"
              name="ABS"
              value={updatedCar.ABS}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="Allradantrieb"
              name="Allradantrieb"
              value={updatedCar.Allradantrieb}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="Zentralverrieglung"
              name="ZentralVerrieglung"
              value={updatedCar.ZentralVerrieglung}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="Anhängerkupplung"
              name="AnhaengerKupplung"
              value={updatedCar.AnhaengerKupplung}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Türen"
              name="Tueren"
              value={updatedCar.Tueren}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              label="Karosserieform"
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
              label="Felgenlochzahl"
              name="FelgenLoecher"
              value={updatedCar.FelgenLoecher}
              options={['', '3', '4', '5', '6', '8', '10']}
              handleOnChange={handleChange}
            />
            {/* TODO: Datepicker */}
            <EditableField
              label="HU/AU"
              name="HuAu"
              value={new Date(updatedCar.HuAu).toLocaleDateString('de-DE', {
                month: 'long',
                year: 'numeric',
              })}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              label="Motor"
              name="Motor"
              value={updatedCar.Motor}
              options={[
                '',
                '1 Zylinder',
                '2 Zylinder',
                '3 Zylinder',
                '4 Zylinder',
                '5 Zylinder',
                '6 Zylinder',
                '8 Zylinder',
                '10 Zylinder',
                '12 Zylinder',
                'Kreiskolbenmotor',
              ]}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              label="Getriebe"
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
              label="Partikelfilter"
              name="Partikelfilter"
              value={updatedCar.Partikelfilter}
              handleOnChange={handleChange}
            />
            <EditableDropdownField
              label="Heck"
              name="Heck"
              value={updatedCar.Heck}
              handleOnChange={handleChange}
              options={['Stufenheck', 'Schrägheck', 'Steilheck', '']}
            />
            <EditableField
              label="Reifen"
              name="Reifen"
              value={updatedCar.Reifen}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Feststellbremse"
              name="Festsetllbremse"
              value={updatedCar.Feststellbremse}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Klimaalge Kältemittel"
              name="KlimaanlageKaeltemittel"
              value={updatedCar.KlimaanlageKaeltemittel}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Motorsteuerung"
              name="MotorsteuerungTyp"
              value={updatedCar.MotorsteuerungTyp}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Motorsteuerung Wechselintervall (Stecke)"
              name="MotorsteuerungWechselintervallKm"
              value={updatedCar.MotorsteuerungWechselintervallKm}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Motorsteuerung Wechselintervall (Zeit)"
              name="MotorsteuerungWechselintervallZeitJahr"
              value={updatedCar.MotorsteuerungWechselintervallZeitJahr}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="Bremsscheibe Vorne Innenbelüftet"
              name="BremsscheibeVorneInnenbelueftet"
              value={updatedCar.BremsscheibeVorneInnenbelueftet}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Bremsscheibe Vorne Größe"
              name="BremsscheibeVorneGroeße"
              value={updatedCar.BremsscheibeVorneGroeße}
              handleOnChange={handleChange}
            />
            <EditableBooleanField
              label="Bremsscheibe Hinten Innenbelüftet"
              name="BremsscheibeHintenInnenbelueftet"
              value={updatedCar.BremsscheibeHintenInnenbelueftet}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Bremsscheibe Hinten Größe"
              name="BremsscheibeHintenGroeße"
              value={updatedCar.BremsscheibeHintenGroeße}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Notiz"
              name="Notiz"
              value={updatedCar.Notiz}
              handleOnChange={handleChange}
            />
            <EditableField
              label="Kommentar"
              name="Kommentar"
              value={updatedCar.Kommentar}
              handleOnChange={handleChange}
            />
            <DragAndDropField
              label="Dokumente"
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
