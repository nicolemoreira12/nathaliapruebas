import { useState } from 'react';
import ArtistaForm from '../components/ArtistaForm';
import ArtistaList from '../components/ArtistaList';
import type { Artista } from '../types/artista';

const ArtistaPage = () => {
  const [artistas, setArtistas] = useState<Artista[]>([]);

  const handleAddArtista = (artista: Artista) => {
    setArtistas([...artistas, artista]);
  };

  return (
    <div>
      <h2>Perfil de Artista</h2>
      <ArtistaForm onAdd={handleAddArtista} />
      <ArtistaList artistas={artistas} />
    </div>
  );
};

export default ArtistaPage;
