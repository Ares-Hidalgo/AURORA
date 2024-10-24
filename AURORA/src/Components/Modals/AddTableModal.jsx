// src/components/AddTableModal.js
import React, { useState } from 'react';

const AddTableModal = ({ onClose, onAddTable }) => {
  const [tableNumber, setTableNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tableNumber) {
      onAddTable(tableNumber);
      setTableNumber('');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Agregar Mesa</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Número de Mesa</label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="Ingrese el número de la mesa"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#B21E35] text-white py-2 rounded-md hover:bg-[#660708] transition duration-300"
          >
            Agregar Mesa
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-2 w-full text-center text-gray-500 hover:underline"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTableModal;
