import { useEffect, useState, type ReactNode } from 'react';
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
  const location = useLocation();

  const isActive =
    location.pathname === root || location.pathname.startsWith(root + '/');

  useEffect(() => {
    if (!isActive) {
      setOpen(false);
    }
  }, [isActive, location.pathname]);

  const [open, setOpen] = useState(false);

  return (
    <div className="nav group">
      <NavHeader to={root} onClick={() => setOpen(!open)}>
        {title}
      </NavHeader>
      <div className={`navContent ${open || isActive ? 'open' : ''}`}>
        <div
          className="navContentContent"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function NavHeader({
  to,
  children,
  onClick,
}: {
  to: string;
  children: ReactNode;
  onClick: () => void;
}) {
  const location = useLocation();

  const isActive =
    location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <div
      // className={isActive ? 'text-blue-500 font-bold' : 'text-gray-500'}
      className={`navLink ${isActive ? 'active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
