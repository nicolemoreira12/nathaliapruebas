import { useEffect, useState } from 'react';
import ArtistaPage from './pages/ArtistaPage';
import ContenidoPage from './pages/ContenidoPage';
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
    setUsuarios([...usuarios, nuevo]);
    setMostrarRegistro(false); // Después de registrar, ir a login
  };

  const handleLogin = (usuario: Usuario) => {
    setUsuarioActivo(usuario);
  };

  const renderSeccion = () => {
    switch (seccion) {
      case 'Artistas': return <ArtistaPage />;
      case 'Contenido': return <ContenidoPage />;
      case 'Eventos': return <EventosPage />;
      case 'Colaboraciones': return <ColaboracionesPage />;
      case 'Metas': return <MetasPage />;
      default: return <ArtistaPage />;
    }
  };

  if (!usuarioActivo) {
    return (
      <div className="auth-container">
        <div className="form-wrapper">
          {mostrarRegistro ? (
            <>
              <RegistroForm onRegistro={handleRegistrar} />
              <p className="switch-text">¿Ya tienes cuenta? <button onClick={() => setMostrarRegistro(false)}>Inicia sesión</button></p>
            </>
          ) : (
            <>
              <LoginForm usuarios={usuarios} onLogin={handleLogin} />
              <p className="switch-text">¿No tienes cuenta? <button onClick={() => setMostrarRegistro(true)}>Regístrate</button></p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="main-app">
      <header className="top-nav">
        <h2 className="logo">🎧 ACISUM-MUSIC </h2>
        <nav className="nav-buttons">
          {['Artista', 'Contenido', 'Eventos', 'Colaboraciones', 'Metas'].map((item) => (
            <button
              key={item}
              className={seccion === item ? 'active' : ''}
              onClick={() => setSeccion(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <button className="logout-btn" onClick={() => {
          localStorage.removeItem("usuarioActivo");
          window.location.reload();
        }}>
          Cerrar sesión
        </button>
      </header>

      <main className="section-wrapper">
        <h1>{seccion}</h1>
        {renderSeccion()}
      </main>
    </div>
  );
};

export default App;
