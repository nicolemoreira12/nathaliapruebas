import type { Contenido } from '../types/contenido';

interface Props {
  contenidos: Contenido[];
}

const ContenidoList = ({ contenidos }: Props) => {
  return (
    <ul>
      {contenidos.map((item) => (
        <li key={item.id}>
          <strong>{item.titulo}</strong> ({item.tipo})<br />
          Lanzamiento: {item.fecha_lanzamiento}<br />
          <em>Letra:</em> {item.lyrics || 'Sin letra'}<br />
          <small>Artista ID: {item.artistaId}</small>
        </li>
      ))}
    </ul>
  );
};

export default ContenidoList;
