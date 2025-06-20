import { useState } from 'react';
import ColaboracionForm from '../components/ColaboracionForm';
import ColaboracionList from '../components/ColaboracionList';
import type { Colaboracion } from '../types/colaboracion';

const ColaboracionesPage = () => {
  const [colaboraciones, setColaboraciones] = useState<Colaboracion[]>([]);

  const handleAdd = (c: Colaboracion) => {
    setColaboraciones([...colaboraciones, c]);
  };

  return (
    <div>
      <h2>Colaboraciones</h2>
      <ColaboracionForm onAdd={handleAdd} />
      <ColaboracionList colaboraciones={colaboraciones} />
    </div>
  );
};

export default ColaboracionesPage;
