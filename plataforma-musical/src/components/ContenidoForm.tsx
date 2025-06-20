import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Contenido } from '../types/contenido';

interface Props {
  onAdd: (contenido: Contenido) => void;
}

const ContenidoForm = ({ onAdd }: Props) => {
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState<'Canción' | 'Álbum'>('Canción');
  const [fecha, setFecha] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [artistaId, setArtistaId] = useState(''); // Por ahora manual

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nuevoContenido: Contenido = {
      id: crypto.randomUUID(),
      artistaId,
      titulo,
      tipo,
      fecha_lanzamiento: fecha,
      lyrics,
    };
    onAdd(nuevoContenido);
    setTitulo('');
    setTipo('Canción');
    setFecha('');
    setLyrics('');
    setArtistaId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
      <select value={tipo} onChange={(e) => setTipo(e.target.value as 'Canción' | 'Álbum')}>
        <option value="Canción">Canción</option>
        <option value="Álbum">Álbum</option>
      </select>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      <textarea value={lyrics} onChange={(e) => setLyrics(e.target.value)} placeholder="Letra..." />
      <input value={artistaId} onChange={(e) => setArtistaId(e.target.value)} placeholder="ID del artista" required />
      <button type="submit">Agregar Contenido</button>
    </form>
  );
};

export default ContenidoForm;
