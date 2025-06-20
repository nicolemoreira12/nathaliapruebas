import { useState } from 'react';
import MetaForm from '../components/MetaForm';
import MetaList from '../components/MetaList';
import type { MetaArtista } from '../types/meta';

const MetasPage = () => {
  const [metas, setMetas] = useState<MetaArtista[]>([]);

  const handleAdd = (meta: MetaArtista) => {
    setMetas([...metas, meta]);
  };

  return (
    <div>
      <h2>Metas del Artista</h2>
      <MetaForm onAdd={handleAdd} />
      <MetaList metas={metas} />
    </div>
  );
};

export default MetasPage;
