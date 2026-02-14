import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Dashboard } from '@/components/layout/Dashboard';
import { VisualizerPage } from '@/pages/VisualizerPage';

const AnalyzerPage = lazy(() =>
  import('@/pages/AnalyzerPage').then((m) => ({ default: m.AnalyzerPage })),
);
const HelpPage = lazy(() =>
  import('@/pages/HelpPage').then((m) => ({ default: m.HelpPage })),
);

function PageLoader() {
  return (
    <div className="flex h-64 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/frontend">
      <Routes>
        <Route element={<Dashboard />}>
          <Route index element={<VisualizerPage />} />
          <Route
            path="analyzer"
            element={
              <Suspense fallback={<PageLoader />}>
                <AnalyzerPage />
              </Suspense>
            }
          />
          <Route
            path="help"
            element={
              <Suspense fallback={<PageLoader />}>
                <HelpPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
