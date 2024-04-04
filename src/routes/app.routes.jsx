import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '../layout/DefaultLayout';
import { Home } from '../pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}
