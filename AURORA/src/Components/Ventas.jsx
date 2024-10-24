// src/components/Pedidos.js
import React from 'react';

const Pedidos = () => {
  const pedidos = [
    { id: 1, cliente: 'Juan Pérez', fecha: '2024-10-01', estado: 'Entregado' },
    { id: 2, cliente: 'María López', fecha: '2024-10-02', estado: 'En Proceso' },
    { id: 3, cliente: 'Carlos García', fecha: '2024-10-03', estado: 'Cancelado' },
    // Agrega más pedidos según sea necesario
  ];

  return (
    <div className="p-6 bg-[#F5F3F4] min-h-screen rounded rounded-xl">
      <h1 className="text-3xl font-bold text-[#B21E35] mb-4">Pedidos</h1>
      <button className="mb-4 px-4 py-2 bg-[#B21E35] text-white rounded-md hover:bg-[#660708] transition duration-300">
        Agregar Pedido
      </button>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#B21E35] text-white">
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Cliente</th>
            <th className="py-3 px-4 text-left">Fecha</th>
            <th className="py-3 px-4 text-left">Estado</th>
            <th className="py-3 px-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id} className="border-b">
              <td className="py-3 px-4">{pedido.id}</td>
              <td className="py-3 px-4">{pedido.cliente}</td>
              <td className="py-3 px-4">{pedido.fecha}</td>
              <td className="py-3 px-4">{pedido.estado}</td>
              <td className="py-3 px-4">
                <button className="text-[#B21E35] hover:text-[#660708] transition duration-300 mr-2">
                  Ver Detalles
                </button>
                <button className="text-red-600 hover:text-red-800 transition duration-300">
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pedidos;
