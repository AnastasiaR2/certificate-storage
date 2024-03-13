import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';
import { Layout } from '@/components/components.js';
import { AddCertificate } from '@/pages/add-certificate/add-certificate.jsx';
import { Main } from '@/pages/main/main.jsx';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={AppRoute.ROOT} element={<Main />} />
          <Route path={AppRoute.ADD_CERTIFICATE} element={<AddCertificate />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
