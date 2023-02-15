import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

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
              <Link to="/" className="mainMenu__a mainMenu__a-selected">
                <span>Mi compensación</span>
              </Link>
              <Link to="/" className="mainMenu__a">
                <span>Vacaciones</span>
              </Link>
              <Link to="/" className="mainMenu__a">
                <span>Beneficios</span>
              </Link>
              <Link to="/" className="mainMenu__a">
                <span>Certificados</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="btn-contained-primary text-sm px-5 py-3 hidden lg:block"
            >
              Mi recibo de nómina
            </Link>
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-red-600 border border-white absolute -top-1 right-0"></div>
              <BsFillBellFill className="text-white text-2xl" />
            </div>
            <div className="relative">
              <div className="w-10 h-10 border-2 border-white rounded-full">
                <img
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
                  className="object-fill w-full h-full rounded-full"
                  alt="avatar"
                />
              </div>
            </div>
            <BiMenu className="text-white text-2xl block lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};
