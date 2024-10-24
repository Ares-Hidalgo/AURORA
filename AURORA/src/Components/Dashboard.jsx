import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from "./Home";
import Empleados from './Empleados';
import Inventario from './Inventario';
import Ventas from "./Ventas";
import Pedidos from './Pedidos';
import Clientes from './Clientes';
import Reservas from "./Reservas";

// Importa otros componentes aquí

const Dashboard = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-[#ad2831] overflow-y-auto">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Empleados" element={<Empleados />} />
          <Route path="/Inventario" element={<Inventario />} />
          <Route path='/Ventas' element={<Ventas/>}/>
          <Route path='/Pedidos' element={<Pedidos/>}/>
          <Route path='/Clientes' element={<Clientes/>}/>
          <Route path='/Reservas' element={<Reservas/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
