import { ChangeLanguage } from "../components/Navbar";
import { useTranslation } from "react-i18next";

import login from "../assets/login/bg-login.png";

export const Login = () => {
  const [t] = useTranslation("global");
  return (
    <div className="h-screen w-full grid grid-cols-12 px-4 items-center">
      <div className="hidden lg:flex lg:col-span-6">
        <img
          src={login}
          alt="login"
          className="w-full hidden lg:block"
          width="100%"
          height="auto"
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="flex flex-col items-center">
          <div className="w-52 h-16 bg-gray-500 mb-11"></div>
          <p className="text-2xl md:text-3xl text-black">
            ¡{t("login.we-welcome-you")}!
          </p>
          <div className="my-4">
            <ChangeLanguage />
          </div>
          <form className="w-full">
            <div className="relative mb-6">
              <input
                type="email"
                placeholder=" "
                className="inputText-primary"
              />
              <label className="absolute top-2 left-3 text-sm duration-300 origin-top-left -z-10">
                {t("login.email")}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="password"
                placeholder=" "
                className="inputText-primary"
              />
              <label className="absolute top-2 left-3 text-sm duration-300 origin-top-left -z-10">
                {t("login.password")}
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="btn-contained-primary px-4 py-2 w-full md:w-auto"
              >
                {t("login.log-in")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
