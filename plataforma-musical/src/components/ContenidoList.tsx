import type { Contenido } from '../types/contenido';

interface Props {
  contenidos: Contenido[];
  onActualizar: (contenido: Contenido) => void;
}

const ContenidoList = ({ contenidos, onActualizar }: Props) => {
  // Funciones para manejar interacciones
  const handleLike = (contenido: Contenido) => {
    onActualizar({ ...contenido, likes: (contenido.likes || 0) + 1 });
  };
  const handlePlay = (contenido: Contenido) => {
    onActualizar({ ...contenido, reproducciones: (contenido.reproducciones || 0) + 1 });
  };
  const handleSeguir = (contenido: Contenido) => {
    onActualizar({ ...contenido, seguidores: (contenido.seguidores || 0) + 1 });
  };

  return (
    <div className="card-lista" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {contenidos.map(c => (
        <div
          key={c.id}
          className="card contenido-card"
          style={{
            width: '280px',
            padding: '15px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {c.imagen && (
            <img
              src={c.imagen}
              alt={c.titulo}
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }}
            />
          )}
          <div>
            <h3 style={{ margin: '0 0 6px' }}>{c.titulo}</h3>
            <p style={{ margin: '0 0 6px', fontWeight: '600', color: '#3b82f6' }}>{c.tipo}</p>
            <p style={{ margin: 0, color: '#6b7280' }}>
              <strong>Fecha:</strong> {c.fecha_lanzamiento}
            </p>
            {c.lyrics && <p style={{ marginTop: '8px', fontStyle: 'italic', color: '#374151', fontSize: '0.9rem' }}>{c.lyrics.length > 100 ? c.lyrics.slice(0, 100) + '...' : c.lyrics}</p>}
          </div>

          {/* Botones interacción */}
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <button
              style={{ flex: 1, padding: '8px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              onClick={() => handlePlay(c)}
            >
              ▶ Reproducir ({c.reproducciones || 0})
            </button>
            <button
              style={{ flex: 1, padding: '8px', backgroundColor: '#10b981', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              onClick={() => handleLike(c)}
            >
              ❤️ Me gusta ({c.likes || 0})
            </button>
            <button
              style={{ flex: 1, padding: '8px', backgroundColor: '#f59e0b', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              onClick={() => handleSeguir(c)}
            >
              ➕ Seguir ({c.seguidores || 0})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContenidoList;
