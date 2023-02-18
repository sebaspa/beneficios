import { Link, NavLink } from "react-router-dom";
import { MoblieMenu, Notification, UserMenu } from '../Navbar';


export const Navbar = () => {
  return (
    <div className="bg-cod-gray-900 min-h-[60px] pt-2 lg:pt-0">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <div className="w-28 h-8 bg-gray-500"></div>
            </Link>
            <div className="hidden lg:flex font-medium text-sm mainMenu">
              <NavLink to="/" className="mainMenu__a mainMenu__a-selected">
                <span>Mi compensación</span>
              </NavLink>
              <NavLink to="/" className="mainMenu__a">
                <span>Vacaciones</span>
              </NavLink>
              <NavLink to="/" className="mainMenu__a">
                <span>Beneficios</span>
              </NavLink>
              <NavLink to="/" className="mainMenu__a">
                <span>Certificados</span>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="btn-contained-primary text-sm px-5 py-3 hidden lg:block"
            >
              Mi recibo de nómina
            </Link>
            <Notification />
            <UserMenu />
            <MoblieMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
