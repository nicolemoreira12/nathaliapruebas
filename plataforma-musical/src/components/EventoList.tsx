import type  { Evento } from '../types/evento';

interface Props {
  eventos: Evento[];
}

const EventoList = ({ eventos }: Props) => {
  return (
    <ul>
      {eventos.map((e) => (
        <li key={e.id}>
          <strong>{e.nombre}</strong> - {e.fecha}<br />
          Ubicación: {e.ubicacion}<br />
          Artista ID: {e.artistaId}
        </li>
      ))}
    </ul>
  );
};

export default EventoList;
