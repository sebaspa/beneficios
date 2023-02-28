import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MoblieMenu, Notification, UserMenu } from "../Navbar";
import { menuItems } from "../../constants";

export const Navbar = () => {
  const [t] = useTranslation("global");
  return (
    <div className="bg-cod-gray-900 min-h-[60px] pt-2 lg:pt-0">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <div className="w-28 h-8 bg-gray-500"></div>
            </Link>
            <div className="hidden lg:flex font-medium text-sm mainMenu">
              <>
                {menuItems.map((item) => {
                  return (
                    <NavLink
                      to={item.url}
                      className="mainMenu__a"
                      key={item.id}
                    >
                      <span>{t(item.name)}</span>
                    </NavLink>
                  );
                })}
              </>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="btn-contained-primary text-sm px-5 py-3 hidden lg:block"
            >
              {t("navbar.my-payroll-receipt")}
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
