import { useState} from 'react';
import type {FormEvent } from 'react';
import type { Evento } from '../types/evento';

interface Props {
  onAdd: (evento: Evento) => void;
}

const EventoForm = ({ onAdd }: Props) => {
  const [artistaId, setArtistaId] = useState('');
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nuevoEvento: Evento = {
      id: crypto.randomUUID(),
      artistaId,
      nombre,
      fecha,
      ubicacion,
    };
    onAdd(nuevoEvento);

    setArtistaId('');
    setNombre('');
    setFecha('');
    setUbicacion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={artistaId} onChange={(e) => setArtistaId(e.target.value)} placeholder="ID del artista" required />
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del evento" required />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      <input value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} placeholder="Ubicación" required />
      <button type="submit">Agregar Evento</button>
    </form>
  );
};

export default EventoForm;
