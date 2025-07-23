import React, { Suspense, useState } from 'react';
import Login from './Login';

const Projects = React.lazy(() => import('projects/Projects'));
const Tasks    = React.lazy(() => import('tasks/Tasks'));

export default function App() {
  const [logged, setLogged] = useState(false);

  if (!logged) {
    return <Login onLogin={() => setLogged(true)} />;
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>📦 Micro‑Frontend Demo (Shell)</h1>

      <Suspense fallback={<p>Cargando proyectos…</p>}>
        <Projects />
      </Suspense>

      <hr />

      <Suspense fallback={<p>Cargando tareas…</p>}>
        <Tasks />
      </Suspense>
    </div>
  );
}
