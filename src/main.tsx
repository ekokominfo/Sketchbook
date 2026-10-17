import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
const Scene = lazy(() => import('./Scene'));
createRoot(document.getElementById('root')!).render(<Suspense fallback={<div className="loading">Opening the sketchbook…</div>}><Scene /></Suspense>);
