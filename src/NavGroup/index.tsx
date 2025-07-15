import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';
import './navGroup.scss';
import useNav from '@/NavProvider/useNav';

export default function NavGroup({
  root,
  title,
  children,
}: {
  root: string;
  title: string;
  children: ReactNode;
}) {
  const { openTitle, setOpenTitle } = useNav();
  const location = useLocation();

  const active =
    location.pathname === root || location.pathname.startsWith(root + '/');

  useEffect(() => {
    if (!active) {
      // setOpen(false);
      setOpenTitle('');
    }
  }, [active, location.pathname]);

  // const [open, setOpen] = useState(openTitle === title);
  const open = openTitle === title;

  function toggleGroup() {
    // setOpen(!open);
    setOpenTitle(title);
  }

  return (
    <div className="navGroup" data-state={active ? 'active' : 'inactive'}>
      <button className="navHeader" onClick={toggleGroup}>
        {title}
      </button>

      <div className={`navContent ${open || active ? 'open' : ''}`}>
        <div>{children}</div>
      </div>
    </div>
  );
}
