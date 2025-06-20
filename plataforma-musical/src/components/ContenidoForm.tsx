// Sugerencia para mejorar visualmente el formulario de Contenido
// Puedes adaptar este ejemplo en tu archivo ContenidoForm.tsx

import { useState } from 'react';
import type { FormEvent} from 'react';
import type { Contenido } from '../types/contenido';

interface Props {
  onAdd: (contenido: Contenido) => void;
}

const ContenidoForm = ({ onAdd }: Props) => {
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState<'Canción' | 'Álbum'>('Canción');
  const [url, setUrl] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd({
      id: crypto.randomUUID(),
      artistaId: '', // Provide a valid artistaId here or add an input for it
      titulo,
      tipo,
      fecha_lanzamiento: '', // Provide a valid date or add an input for it
      lyrics: '', // Provide lyrics or add an input for it
    });
    setTitulo('');
    setTipo('Canción');
    setUrl('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-contenido">
      <h2>Agregar Contenido</h2>
      <div className="form-group">
        <label>Título</label>
        <input value={titulo} onChange={e => setTitulo(e.target.value)} required />
      <div className="form-group">
        <label>Tipo</label>
        <select
          value={tipo}
          onChange={e => setTipo(e.target.value as 'Canción' | 'Álbum')}
          required
        >
          <option value="Canción">Canción</option>
          <option value="Álbum">Álbum</option>
        </select>
      </div>
      </div>
      <div className="form-group">
        <label>URL</label>
        <input value={url} onChange={e => setUrl(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} />
      </div>
      <button type="submit" className="btn-agregar">Agregar</button>
    </form>
  );
};

export default ContenidoForm;