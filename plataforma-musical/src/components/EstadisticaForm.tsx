import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Estadistica } from '../types/estadistica';

interface Props {
  onAdd: (dato: Estadistica) => void;
}

const EstadisticaForm = ({ onAdd }: Props) => {
  const [artistaId, setArtistaId] = useState('');
  const [reproducciones, setReproducciones] = useState(0);
  const [likes, setLikes] = useState(0);
  const [seguidores, setSeguidores] = useState(0);
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nuevaEstadistica: Estadistica = {
      id: crypto.randomUUID(),
      artistaId,
      reproducciones,
      likes,
      seguidores,
      fecha,
    };
    onAdd(nuevaEstadistica);

    // limpiar formulario
    setArtistaId('');
    setReproducciones(0);
    setLikes(0);
    setSeguidores(0);
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={artistaId} onChange={(e) => setArtistaId(e.target.value)} placeholder="ID del artista" required />
      <input type="number" value={reproducciones} onChange={(e) => setReproducciones(+e.target.value)} placeholder="Reproducciones" required />
      <input type="number" value={likes} onChange={(e) => setLikes(+e.target.value)} placeholder="Likes" required />
      <input type="number" value={seguidores} onChange={(e) => setSeguidores(+e.target.value)} placeholder="Seguidores" required />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      <button type="submit">Agregar Estadística</button>
    </form>
  );
};

export default EstadisticaForm;
