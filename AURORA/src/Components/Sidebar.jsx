import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-full bg-[#F5F3F4]"> 
      <button 
        onClick={toggleSidebar} 
        className="p-2 bg-[#B21E35] text-white rounded-md fixed bottom-4 left-10 z-10 transition-all duration-300" // Botón fijo en la parte superior
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i> 
      </button>

      <aside 
        className={`w-64 bg-[#c71f37] shadow-md transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} h-full fixed`}
      >
        <div className="p-4">
          <div className="text-2xl font-bold text-white">
            <Link to="/">AURORA</Link>
          </div>
        </div>
        <ul className="mt-4">
          {['empleados', 'inventario', 'pedidos', 'ventas', 'clientes', 'reservas', 'reportes', 'configuraciones', 'perfil', 'soporte'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item}`}
                className="flex items-center p-4 text-[#f5f3f4] hover:bg-[#B21E35] hover:text-white transition duration-300 ease-in-out"
              >
                <i className={`fas fa-${item === 'empleados' ? 'users' : item === 'inventario' ? 'boxes' : item === 'pedidos' ? 'shopping-cart' : item === 'ventas' ? 'chart-line' : item === 'clientes' ? 'user-friends' : item === 'reservas' ? 'calendar-alt' : item === 'mantenimiento' ? 'wrench' : item === 'reportes' ? 'file-alt' : item === 'configuraciones' ? 'cog' : item === 'perfil' ? 'user-circle' : 'headset'} mr-2`}></i> 
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
      </div>
    </div>
  );
};

export default Sidebar;
