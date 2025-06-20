import { useState } from 'react';
import type  {FormEvent } from 'react';
import type{ ChangeEvent } from 'react';
import type { Artista } from '../types/artista';

interface Props {
  onAdd: (artista: Artista) => void;
}

const ArtistaForm = ({ onAdd }: Props) => {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [pais, setPais] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState<string | undefined>(undefined);

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
    const nuevoArtista: Artista = {
      id: crypto.randomUUID(),
      nombre,
      genero,
      pais,
      descripcion,
      imagen,
    };
    onAdd(nuevoArtista);
    setNombre('');
    setGenero('');
    setPais('');
    setDescripcion('');
    setImagen(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input value={genero} onChange={(e) => setGenero(e.target.value)} placeholder="Género musical" required />
      <input value={pais} onChange={(e) => setPais(e.target.value)} placeholder="País" required />
      <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" />
      <input type="file" accept="image/*" onChange={handleImagenChange} />
      <button type="submit">Agregar Artista</button>
    </form>
  );
};

export default ArtistaForm;
