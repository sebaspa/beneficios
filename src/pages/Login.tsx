import login from "../assets/login/bg-login.png";
import { ChangeLanguage } from "../components/Navbar";

export const Login = () => {
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
            ¡Te damos la bienvenida!
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
              <label className="absolute top-2 left-3 text-sm duration-300 origin-top-left">
                Email
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="password"
                placeholder=" "
                className="inputText-primary"
              />
              <label className="absolute top-2 left-3 text-sm duration-300 origin-top-left">
                Contraseña
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
