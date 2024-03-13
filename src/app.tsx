import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';
import { Main } from '@/pages/main/main.jsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<Main />} />
    </Routes>
  );
};

export { App };
