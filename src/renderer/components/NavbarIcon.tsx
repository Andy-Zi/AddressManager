import { Link } from 'react-router-dom';
import { IconType } from 'react-icons/lib';

interface NavbarIconProps {
  icon: IconType;
  label: string;
  to: string;
}
export default function NavbarIcon({ icon: Icon, label, to }: NavbarIconProps) {
  return (
    <li className="navbar-icon group">
      <Link to={to}>
        <Icon />
        <span className="navbar-icon-label group-hover:scale-100">{label}</span>
      </Link>
    </li>
  );
}
