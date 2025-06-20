import { useState } from 'react';
import ContenidoForm from '../components/ContenidoForm';
import ContenidoList from '../components/ContenidoList';
import type { Contenido } from '../types/contenido';

const ContenidoPage = () => {
  const [contenidos, setContenidos] = useState<Contenido[]>([]);

  const handleAddContenido = (contenido: Contenido) => {
    setContenidos([...contenidos, contenido]);
  };

  return (
    <div>
      <h2>Contenido Musical</h2>
      <ContenidoForm onAdd={handleAddContenido} />
      <ContenidoList contenidos={contenidos} />
    </div>
  );
};

export default ContenidoPage;
