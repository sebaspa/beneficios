import { useTranslation } from "react-i18next";

export const ChangeLanguage = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="flex justify-center gap-1 text-sm">
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <span>/</span>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
};
