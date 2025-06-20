import type { Artista } from '../types/artista';

interface Props {
  artistas: Artista[];
}

const ArtistaList = ({ artistas }: Props) => {
  return (
    <div className="card-lista" style={{ marginTop: '30px' }}>
      {artistas.map((artista) => (
        <div key={artista.id} className="card artista-card">
          {artista.imagen && (
            <img src={artista.imagen} alt={artista.nombre} className="artista-img" />
          )}
          <div>
            <strong>{artista.nombre}</strong> - {artista.genero}<br />
            <small>{artista.pais}</small><br />
            <em>{artista.descripcion}</em>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistaList;
