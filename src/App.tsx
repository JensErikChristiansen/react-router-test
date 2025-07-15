import { useState, type ReactNode } from 'react';
import './App.scss';
import { Outlet, NavLink, useLocation, matchPath } from 'react-router';

function App() {
  return (
    <div className="layout">
      <nav className="nav">
        <NavLink
          // className={({ isActive, isPending }) => {
          //   if (isActive) return 'navLink active';

          //   return 'navLink';
          // }}
          className="navLink"
          to="/"
        >
          Home
        </NavLink>

        <NavGroup root="/settings" title="Settings">
          <NavLink className="navLink" to="/settings/profile">
            Profile
          </NavLink>

          <NavLink className="navLink" to="/settings/account">
            Account
          </NavLink>
        </NavGroup>

        <NavGroup root="/payment" title="Payment">
          <NavLink className="navLink" to="/payment/single">
            Single Payment
          </NavLink>

          <NavLink className="navLink" to="/payment/group">
            Group Payment
          </NavLink>
        </NavGroup>
      </nav>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

function NavGroup({
  root,
  title,
  children,
}: {
  root: string;
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <NavHeader to={root}>{title}</NavHeader>
      {children}
    </div>
  );
}

function NavHeader({ to, children }: { to: string; children: ReactNode }) {
  const location = useLocation();

  const isActive =
    location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <div
      // className={isActive ? 'text-blue-500 font-bold' : 'text-gray-500'}
      className={`navLink ${isActive ? 'active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </div>
  );
}
