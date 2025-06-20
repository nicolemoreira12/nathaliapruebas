import { useState } from 'react';
import EventoForm from '../components/EventoForm';
import EventoList from '../components/EventoList';
import type { Evento } from '../types/evento';

const EventosPage = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);

  const handleAddEvento = (evento: Evento) => {
    setEventos([...eventos, evento]);
  };

  return (
    <div>
      <h2>Eventos</h2>
      <EventoForm onAdd={handleAddEvento} />
      <EventoList eventos={eventos} />
    </div>
  );
};

export default EventosPage;
