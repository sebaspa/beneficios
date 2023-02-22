import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-persian-green-200 py-4">
      <div className="container mx-auto px-4">
        <div className="text-white text-sm font-medium flex flex-col md:flex-row items-center justify-center gap-2 flex-wrap">
          <Link to="/" className="underline">Términos y condiciones</Link>
          <span className="hidden md:block">-</span>
          <Link to="/" className="underline">Aviso de privacidad</Link>
          <span className="hidden md:block">-</span>
          <Link to="/" className="underline">Soporte al usuario</Link>
          <span className="hidden xl:block">-</span>
          <p className="text-xs md:text-sm">
            Diblo Corporativo. Todos los derechos Reservados 2020. ©2020
            ANHEUSER-BUSCH INBEV S.A.
          </p>
        </div>
      </div>
    </div>
  );
};
