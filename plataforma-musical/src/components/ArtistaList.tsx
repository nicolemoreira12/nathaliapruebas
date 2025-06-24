import type { Artista } from '../types/artista';

interface Props {
  artistas: Artista[];
  onEditar: (artista: Artista) => void;
  onEliminar: (id: string) => void;
}

const ArtistaList = ({ artistas, onEditar, onEliminar }: Props) => {
  return (
    <div className="card-lista" style={{ marginTop: '30px' }}>
      {artistas.map((artista) => (
        <div key={artista.id} className="card artista-card" style={{ position: 'relative', padding: '20px' }}>
          {artista.imagen && (
            <img src={artista.imagen} alt={artista.nombre} className="artista-img" />
          )}

          <div style={{ paddingRight: '120px' /* para dejar espacio a los botones */ }}>
            <strong>{artista.nombre}</strong> - {artista.genero}<br />
            <small>{artista.pais}</small><br />
            <em>{artista.descripcion}</em>
          </div>

          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              zIndex: 1
            }}
          >
            <button
              onClick={() => onEditar(artista)}
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              aria-label={`Editar artista ${artista.nombre}`}
            >
              Editar
            </button>
            <button
              onClick={() => onEliminar(artista.id)}
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              aria-label={`Eliminar artista ${artista.nombre}`}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistaList;
