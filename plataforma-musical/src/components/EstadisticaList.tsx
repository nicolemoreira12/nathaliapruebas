import type { Estadistica } from '../types/estadistica';

interface Props {
  estadisticas: Estadistica[];
}

const EstadisticaList = ({ estadisticas }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Artista ID</th>
          <th>Fecha</th>
          <th>Reproducciones</th>
          <th>Likes</th>
          <th>Seguidores</th>
        </tr>
      </thead>
      <tbody>
        {estadisticas.map((e) => (
          <tr key={e.id}>
            <td>{e.artistaId}</td>
            <td>{e.fecha}</td>
            <td>{e.reproducciones}</td>
            <td>{e.likes}</td>
            <td>{e.seguidores}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EstadisticaList;
