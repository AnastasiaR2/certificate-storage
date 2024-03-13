import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';
import { Layout } from '@/components/components.js';
import { Main } from '@/pages/main/main.jsx';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={AppRoute.ROOT} element={<Main />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
