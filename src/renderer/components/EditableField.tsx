import City from 'main/Database/DataSchema/City';
import React, { useState } from 'react';

type EditableFieldProps = {
  name: string;
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableField({ name, value, handleOnChange }: EditableFieldProps) {
  return (
    <div className="flex">
      <span className="font-semibold w-32">{name}:</span>
      <input
        name={name}
        value={value}
        onChange={handleOnChange}
        className="border rounded py-1 px-2 bg-gray-100 w-64"
      />
    </div>
  );
}

type EditableSchluesselNrFieldProps = {
  name: string;
  name1: string;
  value1: string;
  name2: string;
  value2: string;
  name3: string;
  value3: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableSchluesselNrField({
  name,
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
      <span className="font-semibold w-32">{name}:</span>
      zu1
      <input
        name={name1}
        value={value1}
        onChange={handleOnChange}
        className="border rounded py-1 px-2 bg-gray-100 w-16"
      />
      2/2.1
      <input
        name={name2}
        value={value2}
        onChange={handleOnChange}
        className="border rounded py-1 px-2 bg-gray-100 w-16"
      />
      3/2.2
      <input
        name={name3}
        value={value3}
        onChange={handleOnChange}
        className="border rounded py-1 px-2 bg-gray-100 w-24"
      />
    </div>
  );
}

type EditableLeistungFieldProps = {
  name1: string;
  value1: number;
  name2: string;
  value2: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableLeistungField({
  name1,
  value1,
  name2,
  value2,
  handleOnChange,
}: EditableLeistungFieldProps) {
  return (
    <div className="flex">
      <span className="font-semibold w-32">{name1}:</span>
      <input
        name={name1}
        value={value1}
        onChange={handleOnChange}
        className="border rounded py-1 px-2 bg-gray-100 w-16"
      />
      kW
      <input
        name="PS"
        value={Math.round(value1 * 1.36)}
        onChange={handleOnChange}
        className="border rounded py-1 px-2 bg-gray-100 w-16"
      />
      PS
      <input
        name={name2}
        value={value2}
        onChange={handleOnChange}
        className="border rounded py-1 px-2 bg-gray-100 w-24"
      />
      1/min
    </div>
  );
}

type EditableMultipleFieldProps = {
  name: string;
  value: string[];
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleAddField: (event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>) => void;
  handleDeleteField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
};

export function EditableMultipleField({
  name,
  value,
  handleOnChange,
  handleAddField,
  handleDeleteField,
}: EditableMultipleFieldProps) {
  return (
    <div className="flex">
      <span className="font-semibold w-32">{name}:</span>
      <div className="flex flex-col">
        {value.map((val, index) => (
          <div key={index} className="flex items-center">
            <input
              name={name}
              value={val}
              onChange={(e) => handleOnChange(e, index)}
              className="border rounded py-1 px-2 bg-gray-100 w-64 mt-1 mb-1 mr-1"
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
  name: string;
  value: string;
};

export function UneditableField({ name, value }: UneditableFieldProps) {
  return (
    <div className="flex">
      <span className="font-semibold w-32">{name}:</span>
      {value}
    </div>
  );
}

type EditableOrtFieldProps = {
  ort: City;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableOrtField({ ort, handleOnChange }: EditableOrtFieldProps) {
  return (
    <div className="flex flex-col">
      <span className="font-semibold w-32">Ort:</span>
      <div className="flex flex-col">
        <EditableField name="PLZ" value={ort.PLZ} handleOnChange={handleOnChange} />
        <EditableField name="Ort" value={ort.Ort} handleOnChange={handleOnChange} />
        <EditableField name="Ortsteil" value={ort.Ortsteil} handleOnChange={handleOnChange} />
      </div>
    </div>
  );
}

type EditableBooleanFieldProps = {
  name: string;
  value: boolean | null;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableBooleanField({ name, value, handleOnChange }: EditableBooleanFieldProps) {
  return (
    <div className="flex flex">
      <span className="font-semibold w-32">{name}:</span>
      <div className="flex items-center space-x-2">
        <label>
          <input
            type="checkbox"
            name={name}
            checked={value === true}
            onChange={(event) => handleOnChange({ ...event, target: { ...event.target, value: true, name: name, type: 'checkbox'} })}
          />
          Ja
        </label>
        <label>
          <input
            type="checkbox"
            name={name}
            checked={value === false}
            onChange={(event) => handleOnChange({ ...event, target: { ...event.target, value: false, name: name, type: 'checkbox' } })}
          />
          Nein
        </label>
      </div>
    </div>
  );
}

type EditableDropdownFieldProps = {
  name: string;
  value: string;
  options: string[];
  handleOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function EditableDropdownField({ name, value, options, handleOnChange }: EditableDropdownFieldProps) {
  return (
    <div className="flex">
      <label htmlFor={name} className="font-semibold w-32">
        {name}:
      </label>
      <select id={name} name={name} value={value} onChange={handleOnChange} className='border rounded py-1 px-2 bg-gray-100 w-64'>
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
  name: string;
  value: string[];
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleAddField: (event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>) => void;
  handleDeleteField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
};

export function DragAndDropField({
  name,
  value,
  handleOnChange,
  handleAddField,
  handleDeleteField,
  handleOnDrop,
}: DragAndDropFieldProps) {

  return (
    <div className="flex" name={name} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e,handleOnDrop)}>
      <span className="font-semibold w-32">{name}:</span>
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
              className="border rounded py-1 px-2 bg-gray-100 w-64 mt-1 mb-1 mr-1"
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
