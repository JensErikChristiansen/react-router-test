import './App.scss';
import { Outlet } from 'react-router';
import NavLink from '@/NavLink';
import NavGroup from '@/NavGroup';
import NavProvider from '@/NavProvider';

function App() {
  return (
    <div className="layout">
      <nav className="nav">
        <NavProvider>
          <NavLink
            // className={({ isActive, isPending }) => {
            //   if (isActive) return 'navLink active';

            //   return 'navLink';
            // }}
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

          <NavGroup root="/collection" title="Collection">
            <NavLink to="/collection/single">Single Collection</NavLink>

            <NavLink to="/collection/group">Group Collection</NavLink>
          </NavGroup>
        </NavProvider>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
