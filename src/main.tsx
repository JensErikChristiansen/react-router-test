import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from './Profile/Profile';

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
        id: 'settings',
        loader: async ({ request }) => {
          const res = await fetch(
            'https://restcountries.com/v3.1/all?fields=name',
            {
              signal: request.signal,
            },
          );

          const json = await res.json();

          // console.log(json);
          const countries = json.map(({ name }: any) => name.common);

          return {
            countries,
          };
        },
        children: [
          {
            path: 'profile',
            element: <Profile />,
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
