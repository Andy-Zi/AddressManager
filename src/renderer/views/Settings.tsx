import { useState } from 'react';

export default function Settings() {
  const [importPA2kPath, setImportPA2kPath] = useState<string>(
    'C:\\Users\\andyz\\OneDrive\\Desktop\\pa2 to realm\\Datensatz'
  );
  const [importZipCodePath, setImportZipCodePath] = useState<string>(
    'C:\\Users\\andyz\\OneDrive\\Desktop\\pa2 to realm\\PLZ_2021.csv'
  );

  const handleBrowseFileClick = async (
    // eslint-disable-next-line no-undef
    setPath: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const result = await window.general?.openFileDialog();
    if (result.canceled === false && result.filePaths.length > 0) {
      setPath(result.filePaths[0]);
    }
  };

  const handleBrowseFolderClick = async (
    // eslint-disable-next-line no-undef
    setPath: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const result = await window.general?.openFolderDialog();
    if (result.canceled === false && result.filePaths.length > 0) {
      setPath(result.filePaths[0]);
    }
  };

  const handleImportClick = () => {
    window.settings
      ?.importPA2k(importPA2kPath, importZipCodePath)
      .then((result) => {
        if (result) {
          window.general?.showMessageBox({
            type: 'info',
            message: 'Import successful!',
          });
        } else {
          window.general?.showMessageBox({
            type: 'error',
            message: 'Import failed!',
          });
        }
        return result;
      });
  };

  return (
    <div className="Settings flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <div className="flex items-center mb-4">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="import-path" className="text-gray-700 mr-2">
          Import Path: ../Datensatz
        </label>
        <input
          type="text"
          id="import-path"
          value={importPA2kPath}
          readOnly
          className="border border-gray-300 rounded-l px-3 py-1 w-64"
        />
        <button
          type="button"
          onClick={() => handleBrowseFolderClick(setImportPA2kPath)}
          className="bg-gray-700 text-white px-4 py-1 rounded-r border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Browse
        </button>
      </div>
      <div className="flex items-center mb-4">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="zip-code-path" className="text-gray-700 mr-2">
          Zip Code File: PLZ_2021.csv
        </label>
        <input
          type="text"
          id="zip-code-path"
          value={importZipCodePath}
          readOnly
          className="border border-gray-300 rounded-l px-3 py-1 w-64"
        />
        <button
          type="button"
          onClick={() => handleBrowseFileClick(setImportZipCodePath)}
          className="bg-gray-700 text-white px-4 py-1 rounded-r border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Browse
        </button>
      </div>
      <button
        type="button"
        onClick={handleImportClick}
        className="bg-indigo-500 text-white px-4 py-1 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        Import
      </button>
    </div>
  );
}
