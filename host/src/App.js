import React, { Suspense } from 'react';

const Projects = React.lazy(() => import('projects/Projects'));
const Tasks = React.lazy(() => import('tasks/Tasks'));
const Appointments = React.lazy(() => import('appointments/Appointments'));

export default function App() {
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

      <Suspense fallback={<p>Cargando citas…</p>}>
        <Appointments />
      </Suspense>
    </div>
  );
}
