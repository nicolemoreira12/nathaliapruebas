import { useEffect, useState } from 'react';
import type { Artista } from '../types/artista';
import { v4 as uuidv4 } from 'uuid';

const ArtistaPage = () => {
  const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || 'null');

  const [artistas, setArtistas] = useState<Artista[]>(() => {
    const stored = localStorage.getItem('artistas');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('artistas', JSON.stringify(artistas));
  }, [artistas]);

  const [nuevo, setNuevo] = useState({
    nombre: '',
    genero: '',
    descripcion: '',
    foto: '',
  });

  const handleAgregar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuarioActivo) return;
    const Artista: Artista = {
      ...nuevo,
      id: uuidv4(),
      usuarioId: usuarioActivo.id,
      pais: ''
    };
    setArtistas([...artistas, Artista]);
    setNuevo({ nombre: '', genero: '', descripcion: '', foto: '' });
  };

  const artistasUsuario = artistas.filter(a => a.usuarioId === usuarioActivo?.id);

  return (
    <div className="formulario">
      <h2>Agregar Artista</h2>
      <form onSubmit={handleAgregar}>
        <div className="form-group">
          <label>Nombre:</label>
          <input value={nuevo.nombre} onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })} required />
        </div>
        <div className="form-group">
          <label>Género:</label>
          <input value={nuevo.genero} onChange={e => setNuevo({ ...nuevo, genero: e.target.value })} required />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea value={nuevo.descripcion} onChange={e => setNuevo({ ...nuevo, descripcion: e.target.value })} required />
        </div>
        <div className="form-group">
          <label>Foto URL:</label>
          <input value={nuevo.foto} onChange={e => setNuevo({ ...nuevo, foto: e.target.value })} required />
        </div>
        <button type="submit" className="btn-agregar">Agregar</button>
      </form>

      <div className="card-lista">
        {artistasUsuario.map((a) => (
          <div key={a.id} className="card artista-card">
            <img src={a.imagen} alt={a.nombre} className="artista-img" />
            <div>
              <h3>{a.nombre}</h3>
              <p><strong>Género:</strong> {a.genero}</p>
              <p>{a.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistaPage;
