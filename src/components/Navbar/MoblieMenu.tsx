import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

export const MoblieMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="block relative lg:hidden">
      <BiMenu className="text-white text-2xl" onClick={handleShowMenu} />
      {showMenu && (
        <div className="absolute bg-white shadow-md top-10 right-0 z-30 w-max rounded-lg">
          <ul className="mobileMainMenu">
            <li className="border-t border-gray-200">
              <NavLink to="/" className="bg-persian-green-50">
                Mi compensación
              </NavLink>
            </li>
            <li className="border-t border-gray-200">
              <NavLink to="/">Vacaciones</NavLink>
            </li>
            <li className="border-t border-gray-200">
              <NavLink to="/">Beneficios</NavLink>
            </li>
            <li className="border-t border-gray-200">
              <NavLink to="/">Certificados</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
