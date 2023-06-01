import City from 'main/Database/DataSchema/City';
import React, { useState } from 'react';
import '../styles/components/EditableField.css';
import Teil from 'main/Database/DataSchema/Teil';

type EditableFieldProps = {
  label: string;
  name: string;
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableField({
  label,
  name,
  value,
  handleOnChange,
}: EditableFieldProps) {
  return (
    <div className="flex">
      <span className="inputFieldLabel">{label}:</span>
      <input
        name={name}
        value={value}
        onChange={handleOnChange}
        className="inputField"
      />
    </div>
  );
}

type EditableSchluesselNrFieldProps = {
  label: string;
  name1: string;
  value1: string;
  name2: string;
  value2: string;
  name3: string;
  value3: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableSchluesselNrField({
  label,
  name1,
  value1,
  name2,
  value2,
  name3,
  value3,
  handleOnChange,
}: EditableSchluesselNrFieldProps) {
  return (
    <div className="flex">
      <span className="inputFieldLabel">{label}:</span>
      zu1
      <input
        name={name1}
        value={value1}
        onChange={handleOnChange}
        className="inputFieldSmall"
      />
      2/2.1
      <input
        name={name2}
        value={value2}
        onChange={handleOnChange}
        className="inputFieldSmall"
      />
      3/2.2
      <input
        name={name3}
        value={value3}
        onChange={handleOnChange}
        className="inputFieldSmall"
      />
    </div>
  );
}

type EditableLeistungFieldProps = {
  label: string;
  name1: string;
  value1: number;
  name2: string;
  value2: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableLeistungField({
  label,
  name1,
  value1,
  name2,
  value2,
  handleOnChange,
}: EditableLeistungFieldProps) {
  return (
    <div className="flex">
      <span className="inputFieldLabel">{label}:</span>
      <input
        name={name1}
        value={value1}
        onChange={handleOnChange}
        type="number"
        className="inputFieldSmall"
      />
      kW
      <input
        name="PS"
        value={Math.round(value1 * 1.36)}
        onChange={(e) =>
          handleOnChange({
            ...e,
            target: {
              ...e.target,
              name: name1,
              value: Math.round(e.target.value / 1.36),
            },
          })
        }
        type="number"
        className="inputFieldSmall"
      />
      PS
      <input
        name={name2}
        value={value2}
        onChange={handleOnChange}
        type="number"
        className="inputFieldSmall"
      />
      1/min
    </div>
  );
}

type EditableMultipleFieldProps = {
  label: string;
  name: string;
  value: string[];
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleAddField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>
  ) => void;
  handleDeleteField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
};

export function EditableMultipleField({
  label,
  name,
  value,
  handleOnChange,
  handleAddField,
  handleDeleteField,
}: EditableMultipleFieldProps) {
  return (
    <div className="flex">
      <span className="inputFieldLabel">{label}:</span>
      <div className="flex flex-col">
        {value.map((val, index) => (
          <div key={index} className="flex items-center">
            <input
              name={name}
              value={val}
              onChange={(e) => handleOnChange(e, index)}
              className="inputField"
            />
            <button
              type="button"
              name={name}
              onClick={(e) => handleDeleteField(e, index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-1"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          name={name}
          onClick={handleAddField}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-1"
        >
          +
        </button>
      </div>
    </div>
  );
}

type UneditableFieldProps = {
  label: string;
  name: string;
  value: string;
};

export function UneditableField({ label, name, value }: UneditableFieldProps) {
  return (
    <div className="flex">
      <span className="inputFieldLabel">{label}:</span>
      <input name={name} value={value} readOnly className="inputField" />
    </div>
  );
}

type EditableOrtFieldProps = {
  label: string;
  ort: City;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableOrtField({
  label,
  ort,
  handleOnChange,
}: EditableOrtFieldProps) {
  return (
    <div className="flex flex-col">
      <span className="inputFieldLabel">{label}:</span>
      <div className="flex flex-col">
        <EditableField
          label="PLZ"
          name="PLZ"
          value={ort.PLZ}
          handleOnChange={handleOnChange}
        />
        <EditableField
          label="Ort"
          name="Ort"
          value={ort.Ort}
          handleOnChange={handleOnChange}
        />
        <EditableField
          label="Ortsteil"
          name="Ortsteil"
          value={ort.Ortsteil}
          handleOnChange={handleOnChange}
        />
      </div>
    </div>
  );
}

type EditableBooleanFieldProps = {
  label: string;
  name: string;
  value: boolean | null;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableBooleanField({
  label,
  name,
  value,
  handleOnChange,
}: EditableBooleanFieldProps) {
  return (
    <div className="flex">
      <span className="inputFieldLabel">{label}:</span>
      <div className="flex items-center space-x-2">
        <label>
          <input
            type="checkbox"
            name={name}
            checked={value === true}
            onChange={(event) =>
              handleOnChange({
                ...event,
                target: {
                  ...event.target,
                  value: true,
                  name,
                  type: 'checkbox',
                },
              })
            }
          />
          Ja
        </label>
        <label>
          <input
            type="checkbox"
            name={name}
            checked={value === false}
            onChange={(event) =>
              handleOnChange({
                ...event,
                target: {
                  ...event.target,
                  value: false,
                  name,
                  type: 'checkbox',
                },
              })
            }
          />
          Nein
        </label>
      </div>
    </div>
  );
}

type EditableDropdownFieldProps = {
  label: string;
  name: string;
  value: string;
  options: string[];
  handleOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function EditableDropdownField({
  label,
  name,
  value,
  options,
  handleOnChange,
}: EditableDropdownFieldProps) {
  return (
    <div className="flex">
      <label htmlFor={name} className="inputFieldLabel">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleOnChange}
        className="inputField"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
};

const handleDrop = (event: React.DragEvent<HTMLDivElement>, handleOnDrop) => {
  event.preventDefault();
  const files = Array.from(event.dataTransfer.files);
  const paths = files.map((file) => file.path);
  paths.forEach((path) => {
    handleOnDrop(event, path);
  });
  // const filename = paths[0].split('\\').pop() || paths[0].split('/').pop();
  // setFilename(filename);
  // handleOnDrop(paths[0]);
};

type DragAndDropFieldProps = {
  label: string;
  name: string;
  value: string[];
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleAddField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>
  ) => void;
  handleDeleteField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
};

export function DragAndDropField({
  label,
  name,
  value,
  handleOnChange,
  handleAddField,
  handleDeleteField,
  handleOnDrop,
}: DragAndDropFieldProps) {
  return (
    <div
      className="flex"
      name={name}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, handleOnDrop)}
    >
      <span className="inputFieldLabel">{label}:</span>
      <div className="flex flex-col">
        {value.map((val, index) => (
          <div key={index} className="flex items-center">
            <button
              type="button"
              name={name}
              onClick={() => window.general.openFile(val)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1 mt-1"
            >
              Öffnen
            </button>
            <input
              name={name}
              value={val.split('\\').pop() || val.split('/').pop()}
              onChange={(e) => handleOnChange(e, index)}
              className="inputField"
              readOnly
            />
            <button
              type="button"
              name={name}
              onClick={(e) => handleDeleteField(e, index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-1"
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

type EditableTeileFieldProps = {
  teile: Teil[];
  newTeilName: string;
  handleNewTeilNameChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleAddField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>
  ) => void;
  handleDeleteField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
};

export function EditableTeileField({
  teile,
  newTeilName,
  handleNewTeilNameChange,
  handleOnChange,
  handleAddField,
  handleDeleteField,
}: EditableTeileFieldProps) {
  return (
    <>
      {teile.map((teil, index) => (
        <div className="flex">
          <span className="inputFieldLabel">{teil.Bezeichnung}:</span>
          <div key={index} className="flex items-center">
            <input
              name="Teilenummer"
              value={teil.Teilenummer}
              onChange={(e) => handleOnChange(e, index)}
              className="inputField"
            />
            <button
              type="button"
              name={teil.Teilenummer}
              onClick={(e) => handleDeleteField(e, index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-1"
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div className="flex items-center">
        <input
          type="text"
          value={newTeilName}
          onChange={handleNewTeilNameChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleAddField(event);
            }
          }}
          className="border rounded py-1 px-2 bg-gray-100 w-64 mr-1"
        />
        <button
          type="button"
          onClick={handleAddField}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-1 w-12"
        >
          +
        </button>
      </div>
    </>
  );
}
