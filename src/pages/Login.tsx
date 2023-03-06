import { ChangeLanguage } from '../components/Navbar'
import { useTranslation } from 'react-i18next'
import login from '../assets/login/bg-login.png'
import { FormLogin } from '../components/Login'

export const Login = (): JSX.Element => {
  const { t } = useTranslation()

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
            ¡{t('login.we-welcome-you')}! ¡
            {t('user.greeting', { name: 'Sebastian' })}!
          </p>
          <div className="my-4">
            <ChangeLanguage />
          </div>
          <FormLogin />
        </div>
      </div>
    </div>
  )
}
