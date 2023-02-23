import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <div className="bg-persian-green-200 py-4">
      <div className="container mx-auto px-4">
        <div className="text-white text-sm font-medium flex flex-col md:flex-row items-center justify-center gap-2 flex-wrap">
          <Link to="/" className="underline">
            {t("footer.terms-and-conditions")}
          </Link>
          <span className="hidden md:block">-</span>
          <Link to="/" className="underline">
            {t("footer.privacy-notice")}
          </Link>
          <span className="hidden md:block">-</span>
          <Link to="/" className="underline">
            {t("footer.user-support")}
          </Link>
          <span className="hidden xl:block">-</span>
          <p className="text-xs md:text-sm">
            {t(
              "footer.copyright"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
