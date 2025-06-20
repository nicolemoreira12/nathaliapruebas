import type { MetaArtista } from '../types/meta';

interface Props {
  metas: MetaArtista[];
}

const MetaList = ({ metas }: Props) => {
  return (
    <ul>
      {metas.map((m) => (
        <li key={m.id}>
          <strong>{m.objetivo}</strong><br />
          Descripción: {m.descripcion}<br />
          Fecha límite: {m.fecha_limite}<br />
          Artista ID: {m.artistaId}
        </li>
      ))}
    </ul>
  );
};

export default MetaList;
