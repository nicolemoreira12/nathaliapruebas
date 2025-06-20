import { useState } from 'react';
import type {FormEvent } from 'react';
import type { Colaboracion } from '../types/colaboracion';

interface Props {
  onAdd: (colab: Colaboracion) => void;
}

const ColaboracionForm = ({ onAdd }: Props) => {
  const [artistaId, setArtistaId] = useState('');
  const [colaborador, setColaborador] = useState('');
  const [rol, setRol] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nuevaColaboracion: Colaboracion = {
      id: crypto.randomUUID(),
      artistaId,
      colaborador,
      rol,
      fecha,
    };
    onAdd(nuevaColaboracion);
    setArtistaId('');
    setColaborador('');
    setRol('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={artistaId} onChange={(e) => setArtistaId(e.target.value)} placeholder="ID del artista" required />
      <input value={colaborador} onChange={(e) => setColaborador(e.target.value)} placeholder="Colaborador" required />
      <input value={rol} onChange={(e) => setRol(e.target.value)} placeholder="Rol (ej. productor, feat.)" required />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      <button type="submit">Agregar Colaboración</button>
    </form>
  );
};

export default ColaboracionForm;
