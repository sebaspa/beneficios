import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { ChangeLanguage } from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { AiFillInfoCircle } from "react-icons/ai";

import login from "../assets/login/bg-login.png";

export const Login = () => {
  YupPassword(Yup);
  const [t] = useTranslation("global");
  const textEmailRequired = t("validations.email-is-required");
  const textEmailValidate = t("validations.email-is-not-valid");
  const textPasswordRequired = t("validations.password-is-required");
  const textPasswordNotValid = t("validations.password-not-valid");
  const textPasswordContainlowerCaseLetter = t(
    "validations.password-contain-1-lower-case-letter"
  );
  const textPasswordContainUpperCaseLetter = t(
    "validations.password-contain-1-upper-case-letter"
  );
  const textPasswordContainNumber = t(
    "validations.password-contain-1-number"
  );
  const textPasswordContainSpecialCharacter = t(
    "validations.password-contain-1-special-character"
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required(textEmailRequired).email(textEmailValidate),
      password: Yup.string()
        .required(textPasswordRequired)
        .min(8, textPasswordNotValid)
        .minLowercase(1, textPasswordContainlowerCaseLetter)
        .minUppercase(1, textPasswordContainUpperCaseLetter)
        .minNumbers(1, textPasswordContainNumber)
        .minSymbols(1, textPasswordContainSpecialCharacter),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

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
          <form className="w-full max-w-md" onSubmit={formik.handleSubmit}>
            <div className="relative mb-6">
              <input
                type="email"
                placeholder=" "
                className={
                  formik.touched.email && formik.errors.email
                    ? "inputText-primary inputText-primary-red"
                    : "inputText-primary inputText-primary-green"
                }
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <AiFillInfoCircle
                className={`absolute text-red-600 top-3 right-3 text-md ${
                  formik.touched.email && formik.errors.email
                    ? "block"
                    : "hidden"
                }`}
              />
              <label className="absolute top-2 left-3 text-sm duration-300 origin-top-left -z-10">
                {t("login.email")}
              </label>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-600 text-xs mt-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="relative mb-6">
              <input
                type="password"
                placeholder=" "
                className={
                  formik.touched.password && formik.errors.password
                    ? "inputText-primary inputText-primary-red"
                    : "inputText-primary inputText-primary-green"
                }
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <AiFillInfoCircle
                className={`absolute text-red-600 top-3 right-3 text-md ${
                  formik.touched.password && formik.errors.password
                    ? "block"
                    : "hidden"
                }`}
              />
              <label className="absolute top-2 left-3 text-sm duration-300 origin-top-left -z-10">
                {t("login.password")}
              </label>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-600 text-xs mt-1">
                  {formik.errors.password}
                </p>
              ) : null}
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
