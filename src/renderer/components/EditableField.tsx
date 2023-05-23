import City from 'main/Database/DataSchema/City';
import React, { useState } from 'react';

type EditableFieldProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableField({ name, value, onChange }: EditableFieldProps) {
  return (
    <p className="flex">
      <span className="font-semibold w-32">{name}:</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded py-1 px-2 bg-gray-100 w-64"
      />
    </p>
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableSchluesselNrField({
  name,
  name1,
  value1,
  name2,
  value2,
  name3,
  value3,
  onChange,
}: EditableSchluesselNrFieldProps) {
  return (
    <p className="flex">
      <span className="font-semibold w-32">{name}:</span>
      zu1
      <input
        name={name1}
        value={value1}
        onChange={onChange}
        className="border rounded py-1 px-2 bg-gray-100 w-16"
      />
      2/2.1
      <input
        name={name2}
        value={value2}
        onChange={onChange}
        className="border rounded py-1 px-2 bg-gray-100 w-16"
      />
      3/2.2
      <input
        name={name3}
        value={value3}
        onChange={onChange}
        className="border rounded py-1 px-2 bg-gray-100 w-24"
      />
    </p>
  );
}

type EditableLeistungFieldProps = {
  name1: string;
  value1: number;
  name2: string;
  value2: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableLeistungField({
  name1,
  value1,
  name2,
  value2,
  onChange,
}: EditableLeistungFieldProps) {
  return (
    <p className="flex">
      <span className="font-semibold w-32">{name1}:</span>
      <input
        name={name1}
        value={value1}
        onChange={onChange}
        className="border rounded py-1 px-2 bg-gray-100 w-16"
      />
      kW
      <input
        name="PS"
        value={Math.round(value1 * 1.36)}
        onChange={onChange}
        className="border rounded py-1 px-2 bg-gray-100 w-16"
      />
      PS
      <input
        name={name2}
        value={value2}
        onChange={onChange}
        className="border rounded py-1 px-2 bg-gray-100 w-24"
      />
      1/min
    </p>
  );
}

type EditableMultipleFieldProps = {
  name: string;
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddField: (event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>) => void;
  handleDeleteField: (
    event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
};

export function EditableMultipleField({
  name,
  value,
  onChange,
  handleAddField,
  handleDeleteField,
}: EditableMultipleFieldProps) {
  return (
    <p className="flex">
      <span className="font-semibold w-32">{name}:</span>
      <div className="flex flex-col">
        {value.map((val, index) => (
          <div className="flex items-center">
            <input
              name={index.toString()}
              value={val}
              onChange={onChange}
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
    </p>
  );
}

type UneditableFieldProps = {
  name: string;
  value: string;
};

export function UneditableField({ name, value }: UneditableFieldProps) {
  return (
    <p className="flex">
      <span className="font-semibold w-32">{name}:</span>
      {value}
    </p>
  );
}

type EditableOrtFieldProps = {
  ort: City;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditableOrtField({ ort, onChange }: EditableOrtFieldProps) {
  return (
    <p className="flex flex-col">
      <span className="font-semibold w-32">Ort:</span>
      <div className="flex flex-col">
        <EditableField name="PLZ" value={ort.PLZ} onChange={onChange} />
        <EditableField name="Ort" value={ort.Ort} onChange={onChange} />
        <EditableField name="Ortsteil" value={ort.Ortsteil} onChange={onChange} />
      </div>
    </p>
  );
}
