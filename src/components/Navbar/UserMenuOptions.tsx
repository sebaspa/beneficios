import { Link } from "react-router-dom";
import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

export const UserMenuOptions = () => {
  return (
    <div className="pt-2 absolute -right-10 md:right-0 top-10 z-10">
    <div className="w-72 bg-white shadow-md rounded-lg ">
      <div className="w-full py-5">
        <img
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
          className="mx-auto w-20 h-20 rounded-full border-4 border-persian-green-400"
          loading="lazy"
          alt="avatar"
        />
      </div>
      <div className="text-center">
        <p className="font-medium text-base text-persian-green-400 mb-2">
          Nombre del usuario
        </p>
        <p className="text-black text-sm mb-1">Posición</p>
        <p className="text-black text-sm mb-1">0123456789</p>
        <p className="text-black text-sm mb-1">nombre@ab-inbev.com</p>
      </div>
      <div className="text-center py-7">
        <Link
          to="/"
          className="text-sm px-5 py-3 btn-outlined-primary"
        >
          Ver mi perfil
        </Link>
      </div>
      <ul>
        <li className="border-t border-gray-200 py-4 px-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-persian-green-400 text-base"
          >
            <BiHelpCircle />
            <p>Ayuda</p>
          </Link>
        </li>
        <li className="border-t border-gray-200 py-4 px-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-persian-green-400 text-base"
          >
            <MdLogout />
            <p>Cerrar sesión</p>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};
