import { NavLink as RNavLink } from 'react-router';
import type { NavLinkProps } from 'react-router';
import './navLink.scss';

export default function NavLink({ className, ...props }: NavLinkProps) {
  return <RNavLink className={`navLink ${className}`} {...props} />;
}
