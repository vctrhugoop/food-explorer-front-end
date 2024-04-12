import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '../layout/DefaultLayout';
import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/new-dish' element={<NewDish />} />
      </Route>
    </Routes>
  );
}
