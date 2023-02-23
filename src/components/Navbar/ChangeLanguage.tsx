import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ChangeLanguage = () => {
  const [t, i18n] = useTranslation("global");
  const [lang, setlang] = useState("es");

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setlang(lang);
  };

  return (
    <div className="flex justify-center gap-1 text-sm">
      <button
        className={lang === "es" ? "text-persian-green-300" : "text-black"}
        onClick={() => handleChangeLanguage("es")}
      >
        ES
      </button>
      <span>/</span>
      <button
        className={lang === "en" ? "text-persian-green-300" : "text-black"}
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};
