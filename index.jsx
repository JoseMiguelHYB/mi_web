import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => (
  <nav className="flex justify-between items-center p-5 bg-gray-900 text-white fixed w-full top-0 shadow-lg">
    <h1 className="text-2xl font-bold">[Tu Nombre]</h1>
    <ul className="flex space-x-6">
      {['Inicio', 'Sobre mí', 'Proyectos', 'Servicios', 'Contacto'].map((item) => (
        <li key={item} className="hover:text-gray-400 cursor-pointer">{item}</li>
      ))}
    </ul>
  </nav>
);

const HeroSection = () => (
  <div className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-gray-800 to-black">
    <h1 className="text-5xl font-bold">Soy un Ingeniero Informático</h1>
    <p className="text-xl mt-4">Desarrollo software y aplicaciones web modernas y eficientes.</p>
    <div className="mt-6 flex space-x-4 text-3xl">
      <FaGithub className="hover:text-gray-400 cursor-pointer" />
      <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
      <FaEnvelope className="hover:text-gray-400 cursor-pointer" />
    </div>
  </div>
);

const Projects = () => (
  <div className="p-10 text-white bg-gray-800">
    <h2 className="text-3xl font-bold mb-6">Mis Proyectos</h2>
    <div className="grid grid-cols-3 gap-6">
      {[1, 2, 3].map((project) => (
        <div key={project} className="bg-gray-700 p-5 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Proyecto {project}</h3>
          <p className="mt-2">Descripción breve del proyecto.</p>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="p-10 text-white bg-black">
    <h2 className="text-3xl font-bold mb-6">Contacto</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Nombre" className="w-full p-3 rounded bg-gray-700 text-white" />
      <input type="email" placeholder="Correo electrónico" className="w-full p-3 rounded bg-gray-700 text-white" />
      <textarea placeholder="Mensaje" className="w-full p-3 rounded bg-gray-700 text-white"></textarea>
      <button className="p-3 bg-blue-500 hover:bg-blue-700 rounded text-white w-full">Enviar</button>
    </form>
  </div>
);

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <Projects />
      <Contact />
    </div>
  );
}
