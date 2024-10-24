// src/components/Pedidos.js
import React, { useState } from 'react';
import Modal from './Modals/ModalPedidos'; // Importa el componente del modal
import AddTableModal from './Modals/AddTableModal'; // Importa el componente para agregar mesas

const Pedidos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addTableModalOpen, setAddTableModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  
  const [mesas, setMesas] = useState([
    { id: 1, numero: 1, estado: 'Disponible' },
    { id: 2, numero: 2, estado: 'Ocupada' },
    { id: 3, numero: 3, estado: 'Disponible' },
    { id: 4, numero: 4, estado: 'Ocupada' },
  ]);

  const openModal = (mesa) => {
    setSelectedTable(mesa);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTable(null);
  };

  const openAddTableModal = () => {
    setAddTableModalOpen(true);
  };

  const closeAddTableModal = () => {
    setAddTableModalOpen(false);
  };

  const addTable = (newTableNumber) => {
    const newTable = {
      id: mesas.length + 1,
      numero: newTableNumber,
      estado: 'Disponible',
    };
    setMesas((prevMesas) => [...prevMesas, newTable]);
    closeAddTableModal();
  };

  return (
    <div className="p-6 bg-[#F5F3F4] min-h-screen rounded rounded-xl">
      <h1 className="text-3xl font-bold text-[#B21E35] mb-4">Pedidos por Mesa</h1>
      <button
        onClick={openAddTableModal}
        className="mb-4 bg-[#B21E35] text-white py-2 px-4 rounded-md hover:bg-[#660708] transition duration-300"
      >
        Agregar Mesa
      </button>
      <div className="grid grid-cols-2 gap-4">
        {mesas.map((mesa) => (
          <div
            key={mesa.id}
            className={`p-4 rounded-lg shadow-md cursor-pointer transition duration-300 ${
              mesa.estado === 'Disponible' ? 'bg-[#B1A7A6]' : 'bg-[#660708]'
            }`}
            onClick={() => openModal(mesa)}
          >
            <h2 className="text-lg font-bold text-white">Mesa {mesa.numero}</h2>
            <p className="text-sm text-white">{mesa.estado}</p>
          </div>
        ))}
      </div>

      {/* Modal para tomar pedido */}
      {isModalOpen && (
        <Modal onClose={closeModal} mesa={selectedTable} />
      )}

      {/* Modal para agregar mesa */}
      {addTableModalOpen && (
        <AddTableModal onClose={closeAddTableModal} onAddTable={addTable} />
      )}
    </div>
  );
};

export default Pedidos;
