import React, { useState } from "react";
import ModalAuth from "../components/modalAuth";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <nav className="bg-rose-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                       <img className="h-12 w-12" src="/logo.svg" alt="Mario" />
                    </div>

                    {/* Links Desktop */}
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium" onClick={openModal}>Login</a>
                        <a href="#" className="hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium" onClick={openModal}>SignUp</a>
                    </div>

                    {/* Botón Hamburguesa */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-red-600 inline-flex items-center justify-center p-2 rounded-md hover:bg-red-700 focus:outline-none"
                        >
                            <span className="sr-only">Abrir menú</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <ModalAuth isOpen={modalOpen} onClose={closeModal} />
            {/* Links Móviles */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600">Inicio</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600">Personajes</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600">Contacto</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
