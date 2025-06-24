import { useState, useEffect } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import type { Artista } from '../types/artista';

interface Props {
  artistaInicial?: Artista;
  onGuardar: (artista: Artista) => void;
  onCancelar: () => void;
  usuarioId: string; // Lo pasamos desde afuera
}

const ArtistaForm = ({ artistaInicial, onGuardar, onCancelar, usuarioId }: Props) => {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [pais, setPais] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (artistaInicial) {
      setNombre(artistaInicial.nombre);
      setGenero(artistaInicial.genero);
      setPais(artistaInicial.pais);
      setDescripcion(artistaInicial.descripcion);
      setImagen(artistaInicial.imagen);
    }
  }, [artistaInicial]);

  const handleImagenChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!nombre || !genero || !pais) {
      alert('Por favor, llena todos los campos obligatorios');
      return;
    }
    if (!imagen) {
      alert('Por favor, agrega una imagen');
      return;
    }

    onGuardar({
      id: artistaInicial?.id || crypto.randomUUID(),
      nombre,
      genero,
      pais,
      descripcion,
      imagen,
      usuarioId,
      foto: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        placeholder="Género musical"
        required
      />
      <input
        value={pais}
        onChange={(e) => setPais(e.target.value)}
        placeholder="País"
        required
      />
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción"
      />
      <div style={{ marginBottom: 10 }}>
        <input type="file" accept="image/*" onChange={handleImagenChange} />
        {imagen && (
          <img
            src={imagen}
            alt="preview"
            style={{ maxWidth: '120px', maxHeight: '120px', marginTop: 10, borderRadius: 6 }}
          />
        )}
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button type="submit" className="btn-agregar">
          {artistaInicial ? 'Guardar Cambios' : 'Agregar Artista'}
        </button>
        {artistaInicial && (
          <button
            type="button"
            onClick={onCancelar}
            className="btn-cancelar"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default ArtistaForm;
