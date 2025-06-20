import { useState } from 'react';
import EstadisticaForm from '../components/EstadisticaForm';
import EstadisticaList from '../components/EstadisticaList';
import type { Estadistica } from '../types/estadistica';

const EstadisticasPage = () => {
  const [estadisticas, setEstadisticas] = useState<Estadistica[]>([]);

  const handleAddEstadistica = (e: Estadistica) => {
    setEstadisticas([...estadisticas, e]);
  };

  return (
    <div>
      <h2>Estadísticas del Artista</h2>
      <EstadisticaForm onAdd={handleAddEstadistica} />
      <EstadisticaList estadisticas={estadisticas} />
    </div>
  );
};

export default EstadisticasPage;
