import { useEffect, useState } from 'react';
import type { Artista } from '../types/artista';
import ArtistaForm from '../components/ArtistaForm';
import ArtistaList from '../components/ArtistaList';

const ArtistaPage = () => {
  const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || 'null');

  const [artistas, setArtistas] = useState<Artista[]>(() => {
    const stored = localStorage.getItem('artista');
    return stored ? JSON.parse(stored) : [];
  });

  const [modoEdicion, setModoEdicion] = useState(false);
  const [artistaEditando, setArtistaEditando] = useState<Artista | null>(null);

  useEffect(() => {
    localStorage.setItem('artistas', JSON.stringify(artistas));
  }, [artistas]);

  const artistaUsuario = artistas.find(a => a.usuarioId === usuarioActivo?.id);

  const handleAgregar = (artista: Artista) => {
    setArtistas([...artistas, { ...artista, usuarioId: usuarioActivo.id }]);
    setModoEdicion(false);
  };

  const handleEditar = (artistaEditado: Artista) => {
    const actualizado = { ...artistaEditado, usuarioId: usuarioActivo.id };
    setArtistas(prev =>
      prev.map(a => (a.id === actualizado.id ? actualizado : a))
    );
    setModoEdicion(false);
    setArtistaEditando(null);
  };

  const handleEliminar = (id: string) => {
    const confirm = window.confirm('¿Seguro que quieres eliminar tu artista?');
    if (confirm) {
      setArtistas(prev => prev.filter(a => a.id !== id));
      setModoEdicion(false);
      setArtistaEditando(null);
    }
  };

  const handleCancelar = () => {
    setModoEdicion(false);
    setArtistaEditando(null);
  };

  return (
    <div>
      {/* Mostrar formulario si no hay artista o estamos en edición */}
      {(!artistaUsuario || modoEdicion) ? (
        <ArtistaForm
          artistaInicial={modoEdicion && artistaEditando ? artistaEditando : undefined}
          onGuardar={modoEdicion ? handleEditar : handleAgregar}
          onCancelar={handleCancelar}
          usuarioId={usuarioActivo.id}
        />
      ) : (
        <ArtistaList
          artistas={[artistaUsuario]}
          onEditar={(artista) => {
            setArtistaEditando(artista);
            setModoEdicion(true);
          }}
          onEliminar={handleEliminar}
        />
      )}
    </div>
  );
};

export default ArtistaPage;
