import { useEffect, useState } from 'react';
import ContenidoForm from '../components/ContenidoForm';
import ContenidoList from '../components/ContenidoList';
import type { Contenido } from '../types/contenido';

const ContenidoPage = () => {
  const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || 'null');

  const [contenidos, setContenidos] = useState<Contenido[]>(() => {
    const stored = localStorage.getItem('contenidos');
    return stored ? JSON.parse(stored) : [];
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false); // Estado para mostrar formulario

  useEffect(() => {
    localStorage.setItem('contenidos', JSON.stringify(contenidos));
  }, [contenidos]);

  const contenidosUsuario = contenidos.filter(c => c.usuarioId === usuarioActivo?.id);

  const actualizarContenido = (contenidoActualizado: Contenido) => {
    setContenidos(prev =>
      prev.map(c => (c.id === contenidoActualizado.id ? contenidoActualizado : c))
    );
  };

  const handleAddContenido = (contenido: Contenido) => {
    setContenidos([...contenidos, contenido]);
    setMostrarFormulario(false); // Ocultar el formulario al agregar
  };

  return (
    <div className="formulario-contenido" style={{ padding: '20px' }}>
      <h2 style={{ color: '#111827' }}>Tus contenidos</h2>

      {/* Botón para mostrar formulario */}
      {!mostrarFormulario && (
        <button
          onClick={() => setMostrarFormulario(true)}
          style={{
            marginBottom: '1rem',
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          ➕ Agregar contenido
        </button>
      )}

      {/* Formulario visible solo si mostrarFormulario es true */}
      {mostrarFormulario && (
        <ContenidoForm
          onAdd={handleAddContenido}
          usuarioId={usuarioActivo?.id}
          onCancel={() => setMostrarFormulario(false)}
        />
      )}

      {/* Lista de contenidos */}
      <ContenidoList
        contenidos={contenidosUsuario}
        onActualizar={actualizarContenido}
      />
    </div>
  );
};

export default ContenidoPage;
