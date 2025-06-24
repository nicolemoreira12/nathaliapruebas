import { useState } from 'react';
import type { Contenido } from '../types/contenido';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onAdd: (contenido: Contenido) => void;
  usuarioId: string;
  onCancel?: () => void; // Opcional, si se necesita un botón de cancelar
}

const ContenidoForm = ({ onAdd, usuarioId }: Props) => {
  const [contenido, setContenido] = useState({
    tipo: '',
    titulo: '',
    fecha_lanzamiento: '',
    lyrics: '',
    imagen: '',
    reproducciones: 0,
    likes: 0,
    seguidores: 0,
  });

  const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContenido(prev => ({ ...prev, imagen: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuarioId) return;

    onAdd({
      ...contenido,
      id: uuidv4(),
      usuarioId,
    });

    setContenido({
      tipo: '',
      titulo: '',
      fecha_lanzamiento: '',
      lyrics: '',
      imagen: '',
      reproducciones: 0,
      likes: 0,
      seguidores: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', marginBottom: '2rem', color: '#111827' }}>
      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label>Tipo (Canción, Álbum, Video...):</label>
        <input
          style={{ width: '100%', padding: '8px' }}
          value={contenido.tipo}
          onChange={e => setContenido({ ...contenido, tipo: e.target.value })}
          required
        />
      </div>
      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label>Título:</label>
        <input
          style={{ width: '100%', padding: '8px' }}
          value={contenido.titulo}
          onChange={e => setContenido({ ...contenido, titulo: e.target.value })}
          required
        />
      </div>
      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label>Fecha de Lanzamiento:</label>
        <input
          type="date"
          style={{ width: '100%', padding: '8px' }}
          value={contenido.fecha_lanzamiento}
          onChange={e => setContenido({ ...contenido, fecha_lanzamiento: e.target.value })}
          required
        />
      </div>
      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label>Letra (opcional):</label>
        <textarea
          style={{ width: '100%', padding: '8px', minHeight: '80px' }}
          value={contenido.lyrics}
          onChange={e => setContenido({ ...contenido, lyrics: e.target.value })}
        />
      </div>
      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label>Imagen del contenido:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImagen}
          style={{ width: '100%' }}
          required
        />
        {contenido.imagen && (
          <img
            src={contenido.imagen}
            alt="preview"
            style={{ marginTop: '10px', maxWidth: '100%', borderRadius: '8px' }}
          />
        )}
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px' }}>
        Agregar Contenido
      </button>
    </form>
  );
};

export default ContenidoForm;
