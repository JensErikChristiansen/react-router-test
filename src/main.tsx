import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: 'settings',
        children: [
          {
            path: 'profile',
            element: <h2>Profile</h2>,
          },
          {
            path: 'account',
            element: <h2>Account</h2>,
          },
        ],
      },
      {
        path: 'payment',
        children: [
          {
            path: 'single',
            element: <h2>Single Payment</h2>,
          },
          {
            path: 'group',
            element: <h2>Group Payment</h2>,
          },
        ],
      },
      {
        path: 'collection',
        children: [
          {
            path: 'single',
            element: <h2>Single Collection</h2>,
          },
          {
            path: 'group',
            element: <h2>Group Collection</h2>,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <h1>Login</h1>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
