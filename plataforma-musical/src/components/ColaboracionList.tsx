import type { Colaboracion } from '../types/colaboracion';

interface Props {
  colaboraciones: Colaboracion[];
}

const ColaboracionList = ({ colaboraciones }: Props) => {
  return (
    <ul>
      {colaboraciones.map((c) => (
        <li key={c.id}>
          <strong>{c.colaborador}</strong> como <em>{c.rol}</em> <br />
          Fecha: {c.fecha} <br />
          Artista ID: {c.artistaId}
        </li>
      ))}
    </ul>
  );
};

export default ColaboracionList;
