import { useState } from 'react';
import type { Usuario } from '../types/usuario';

interface Props {
  usuarios: Usuario[];
  onLogin: (usuario: Usuario) => void;
}

const LoginForm = ({ usuarios, onLogin }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
      onLogin(usuario);
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2 style={{ color: '#333' }}>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn-agregar">Entrar</button>
    </form>
  );
};

export default LoginForm;
