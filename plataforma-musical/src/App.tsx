import { useEffect, useState } from 'react';
import ArtistaPage from './pages/ArtistaPage';
import ContenidoPage from './pages/ContenidoPage';
import EstadisticasPage from './pages/EstadisticaPage';
import EventosPage from './pages/EventosPage';
import ColaboracionesPage from './pages/ColaboracionesPage';
import MetasPage from './pages/MetasPage';
import RegistroForm from './components/RegistroForm';
import LoginForm from './components/LoginForm';
import type { Usuario } from './types/usuario';
import './App.css';

const App = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>(() => {
    const stored = localStorage.getItem('usuarios');
    return stored ? JSON.parse(stored) : [];
  });

  const [usuarioActivo, setUsuarioActivo] = useState<Usuario | null>(() => {
    const stored = localStorage.getItem('usuarioActivo');
    return stored ? JSON.parse(stored) : null;
  });

  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [mensajeRegistro, setMensajeRegistro] = useState('');
  const [seccion, setSeccion] = useState('Artistas');

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  useEffect(() => {
    if (usuarioActivo) {
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioActivo));
    } else {
      localStorage.removeItem('usuarioActivo');
    }
  }, [usuarioActivo]);

  const handleRegistrar = (nuevo: Usuario) => {
    const nuevosUsuarios = [...usuarios, nuevo];
    setUsuarios(nuevosUsuarios);
    setMostrarRegistro(false); // Mostrar login
    setMensajeRegistro('✅ Registro exitoso. Ahora puedes iniciar sesión.');
  };

  const handleLogin = (usuario: Usuario) => {
    setUsuarioActivo(usuario);
    setMensajeRegistro('');
  };

  const renderSeccion = () => {
    switch (seccion) {
      case 'Artistas': return <ArtistaPage />;
      case 'Contenido': return <ContenidoPage />;
      case 'Estadísticas': return <EstadisticasPage />;
      case 'Eventos': return <EventosPage />;
      case 'Colaboraciones': return <ColaboracionesPage />;
      case 'Metas': return <MetasPage />;
      default: return <ArtistaPage />;
    }
  };

  if (!usuarioActivo) {
    return (
      <div className="main-content">
        {mostrarRegistro ? (
          <>
            <RegistroForm onRegistro={handleRegistrar} />
            <p>¿Ya tienes cuenta? <button onClick={() => setMostrarRegistro(false)}>Inicia sesión</button></p>
          </>
        ) : (
          <>
            <LoginForm usuarios={usuarios} onLogin={handleLogin} />
            {mensajeRegistro && <p style={{ color: 'green' }}>{mensajeRegistro}</p>}
            <p>¿No tienes cuenta? <button onClick={() => setMostrarRegistro(true)}>Regístrate</button></p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">🎧 Plataforma</h2>
        <nav>
          {['Artistas', 'Contenido', 'Estadísticas', 'Eventos', 'Colaboraciones', 'Metas'].map((item) => (
            <button
              key={item}
              className={seccion === item ? 'active' : ''}
              onClick={() => setSeccion(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          onClick={() => {
            localStorage.removeItem("usuarioActivo");
            window.location.reload();
          }}
        >
          Cerrar sesión
        </button>
      </aside>

      <main className="main-content">
        <h1>{seccion}</h1>
        {renderSeccion()}
      </main>
    </div>
  );
};

export default App;
