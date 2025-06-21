import { useState } from "react";
import type { Usuario } from "../types/usuario";
import { v4 as uuidv4 } from 'uuid'; // ✅ Importar correctamente uuid

interface RegistroFormProps {
  onRegistro: (usuario: Usuario) => void;
}

const RegistroForm = ({ onRegistro }: RegistroFormProps) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevoUsuario: Usuario = {
      id: uuidv4(), // ✅ Generar ID único correctamente
      nombre,
      email,
      password,
    };

    onRegistro(nuevoUsuario);
    setNombre('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <div className="form-group">
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button className="btn-agregar" type="submit">Registrar</button>
    </form>
  );
};

export default RegistroForm;
