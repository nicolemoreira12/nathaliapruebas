import { useState } from 'react';
import type  { FormEvent } from 'react';
import type { MetaArtista } from '../types/meta';

interface Props {
  onAdd: (meta: MetaArtista) => void;
}

const MetaForm = ({ onAdd }: Props) => {
  const [artistaId, setArtistaId] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nuevaMeta: MetaArtista = {
      id: crypto.randomUUID(),
      artistaId,
      descripcion,
      objetivo,
      fecha_limite: fecha,
    };
    onAdd(nuevaMeta);
    setArtistaId('');
    setDescripcion('');
    setObjetivo('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={artistaId} onChange={(e) => setArtistaId(e.target.value)} placeholder="ID del artista" required />
      <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción de la meta" required />
      <input value={objetivo} onChange={(e) => setObjetivo(e.target.value)} placeholder="Objetivo (ej. 10K seguidores)" required />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      <button type="submit">Agregar Meta</button>
    </form>
  );
};

export default MetaForm;
