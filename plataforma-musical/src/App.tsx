import { useState } from 'react';
import ArtistaPage from './pages/ArtistaPage';
import ContenidoPage from './pages/ContenidoPage';
import EstadisticasPage from './pages/EstadisticaPage';
import EventosPage from './pages/EventosPage';
import ColaboracionesPage from './pages/ColaboracionesPage';
import MetasPage from './pages/MetasPage';
import './App.css';

const App = () => {
  const [seccion, setSeccion] = useState('Artistas');

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
      </aside>

      <main className="main-content">
        <h1>{seccion}</h1>
        {renderSeccion()}
      </main>
    </div>
  );
};

export default App;
