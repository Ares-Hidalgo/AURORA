// src/components/Modal.js
import React, { useState } from 'react';

const ModalPedidos = ({ onClose, mesa }) => {
  const [pedido, setPedido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del pedido
    console.log(`Pedido para la mesa ${mesa.numero}: ${pedido}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Tomar Pedido - Mesa {mesa.numero}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Pedido</label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
              rows="4"
              placeholder="Ingrese los detalles del pedido..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#B21E35] text-white py-2 rounded-md hover:bg-[#660708] transition duration-300"
          >
            Confirmar Pedido
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

export default ModalPedidos;
