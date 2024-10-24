import React from 'react';

export default function Home() {
    return (
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto mt-6 p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#F5F3F4] rounded-2xl shadow-xl">
            <div className="flex flex-row gap-3 pb-4">
                <h1 className="text-3xl font-bold text-[#660708] my-auto">Login</h1> {/* Cambiado a color de acento */}
            </div>
            <div className="text-sm font-light text-[#B1A7A6] pb-8">Ingresa para usar las funciones de AURORA</div>
            
            <form className="flex flex-col">
                <div className="pb-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#0B090A]">Email</label> {/* Color principal */}
                    <div className="relative text-gray-400">
                        <input type="email" name="email" id="email" className="pl-4 mb-2 bg-gray-50 text-[#0B090A] border focus:border-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-[#B21E35] block w-full p-2.5" placeholder="name@company.com" autoComplete="off" />
                    </div>
                </div>
                
                <div className="pb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#0B090A]">Password</label>
                    <div className="relative text-gray-400">
                        <input type="password" name="password" id="password" placeholder="••••••••••" className="pl-4 mb-2 bg-gray-50 text-[#0B090A] border focus:border-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-[#B21E35] block w-full p-2.5" autoComplete="new-password" />
                    </div>
                </div>
                
                <button type="submit" className="w-full text-[#FFFFFF] bg-[#A4161A] focus:ring-4 focus:outline-none focus:ring-[#B21E35] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Login</button>
                
                <div className="text-sm font-light text-[#B1A7A6]">Aún no tienes cuenta? 
                    <a href="#" className="font-medium text-[#A4161A] hover:underline">Sign Up</a>
                </div>
            </form>
            
            <div className="relative flex py-8 items-center">
                <div className="flex-grow border-t border-[#D3D3D3]"></div> 
                <span className="flex-shrink mx-4 font-medium text-[#B1A7A6]"></span>
                <div className="flex-grow border-t border-[#D3D3D3]"></div>
            </div>
            
            <div className="flex flex-row gap-2 justify-center">
                <button className="flex flex-row w-32 gap-2 bg-[#B1A7A6] p-2 rounded-md text-gray-200">
                    No sé que
                </button>
                <button className="flex flex-row w-32 gap-2 bg-[#B1A7A6] p-2 rounded-md text-gray-200">
                    Poner aquí profe
                </button>
            </div>
        </div>
    );
}
