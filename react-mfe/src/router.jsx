import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Layout from './pages/layout';

export const generateRouter = () => {
  return createBrowserRouter([
    {
      path: '/react-route',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
};
