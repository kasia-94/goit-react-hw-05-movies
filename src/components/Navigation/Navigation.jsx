import { Logo, Menu, MenuItem, MenuLink } from './Navigation.styled';
import logo from '../../images/logo.svg';

export function Navigation() {
  return (
    <nav>
      <Menu>
        <Logo src={logo} alt="logo" />
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="movies">Movies</MenuLink>
        </MenuItem>
      </Menu>
    </nav>
  );
}
