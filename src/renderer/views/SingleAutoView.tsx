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

type SingleViewProps = {
  client: Kunde;
  carid?: string;
};

export default function SingleAutoView() {
  const obj = useOutletContext<SingleViewProps>();
  const Client = obj?.client;
  const CarID = obj?.carid;

  const [updatedCar, setupdatedCar] = useState<Auto>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setupdatedCar({
      ...updatedCar,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setupdatedCar({
      ...updatedCar,
      [event.target.name]: [...updatedCar[event.target.name], ''],
    });
  };

  const handleDeleteField = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setupdatedCar({
      ...updatedCar,
      [event.target.name]: updatedCar[event.target.name].filter(
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
            <EditableField name="Kennzeichen" value={updatedCar.Kennzeichen} onChange={handleChange} />
            <EditableField name="Verkauft" value={updatedCar.Verkauft} onChange={handleChange} />
            <EditableField name="Hersteller" value={updatedCar.Hersteller} onChange={handleChange} />
            <EditableField name="Typ" value={updatedCar.Typ} onChange={handleChange} />
            <EditableField name="Modell" value={updatedCar.Modell} onChange={handleChange} />
            <EditableField name="Modelljahr" value={updatedCar.Modelljahr} onChange={handleChange} />
            <EditableField name="IdentNr" value={updatedCar.IdentNr} onChange={handleChange} />
            <EditableSchluesselNrField name="Schlüsselnr." name1="SchluesselNrZu1" value1={updatedCar.SchluesselNrZu1} name2="SchluesselNrZu2" value2={updatedCar.SchluesselNrZu2} name3="SchluesselNrZu31" value3={updatedCar.SchluesselNrZu31} onChange={handleChange} />
            <EditableLeistungField name1="Leistung" value1={updatedCar.Leistung} name2="MotorumdrehungenProMinute" value2={updatedCar.MotorumdrehungenProMinute} onChange={handleChange} />
            <EditableField name="Hubraum" value={updatedCar.Hubraum} onChange={handleChange} />
            {/* TODO: Datepicker */}
            <EditableField name="Zulassung" value={new Date(updatedCar.Zulassung).toLocaleDateString('de-DE')} onChange={handleChange} />
            <EditableField name="Motornummer" value={updatedCar.Motornummer} onChange={handleChange} />
            <EditableField name="Getriebenummer" value={updatedCar.Getriebenummer} onChange={handleChange} />
            <EditableField name="Farbe" value={updatedCar.Farbe} onChange={handleChange} />
            {/* TODO: Checkboxes with multiple values (Diesel, Benzin, Elektro, Hybrid, ...) */}
            <EditableField name="Motorart" value={updatedCar.Motorart} onChange={handleChange} />
            {/* TODO: Checkboxes */}
            <EditableField name="Servolenkung" value={updatedCar.Servolenkung} onChange={handleChange} />
            {/* TODO: Checkboxes */}
            <EditableField name="Klimaanlage" value={updatedCar.Klimaanlage} onChange={handleChange} />
            {/* TODO: Checkboxes */}
            <EditableField name="ABS" value={updatedCar.ABS} onChange={handleChange} />
            {/* TODO: Checkboxes */}
            <EditableField name="Allradantrieb" value={updatedCar.Allradantrieb} onChange={handleChange} />
            {/* TODO: Checkboxes */}
            <EditableField name="ZentralVerrieglung" value={updatedCar.ZentralVerrieglung} onChange={handleChange} />
            {/* TODO: Checkboxes */}
            <EditableField name="AnhaengerKupplung" value={updatedCar.AnhaengerKupplung} onChange={handleChange} />
            <EditableField name="Tueren" value={updatedCar.Tueren} onChange={handleChange} />
            <EditableField name="Karosserieform" value={updatedCar.Karosserieform} onChange={handleChange} />
            <EditableField name="FelgenLoecher" value={updatedCar.FelgenLoecher} onChange={handleChange} />
            {/* TODO: Datepicker */}
            <EditableField name="HuAu" value={new Date(updatedCar.HuAu).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })} onChange={handleChange} />
            <EditableField name="Motor" value={updatedCar.Motor} onChange={handleChange} />
            <EditableField name="Getriebe" value={updatedCar.Getriebe} onChange={handleChange} />
            <EditableField name="Partikelfilter" value={updatedCar.Partikelfilter} onChange={handleChange} />
            <EditableField name="Heck" value={updatedCar.Heck} onChange={handleChange} />
            <EditableField name="Reifen" value={updatedCar.Reifen} onChange={handleChange} />
            <EditableField name="Festsetllbremse" value={updatedCar.Feststellbremse} onChange={handleChange} />
            <EditableField name="KlimaanlageKaeltemittel" value={updatedCar.KlimaanlageKaeltemittel} onChange={handleChange} />
            <EditableField name="MotorsteuerungTyp" value={updatedCar.MotorsteuerungTyp} onChange={handleChange} />
            <EditableField name="MotorsteuerungWechselintervallKm" value={updatedCar.MotorsteuerungWechselintervallKm} onChange={handleChange} />
            <EditableField name="MotorsteuerungWechselintervallZeitJahr" value={updatedCar.MotorsteuerungWechselintervallZeitJahr} onChange={handleChange} />
            <EditableField name="Dokumente" value={updatedCar.Dokumente} onChange={handleChange} />
            <EditableField name="Notiz" value={updatedCar.Notiz} onChange={handleChange} />
            <EditableField name="Kommentar" value={updatedCar.Kommentar} onChange={handleChange} />
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
