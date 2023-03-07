import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ChangeLanguage = (): JSX.Element => {
  const [, i18n] = useTranslation()
  const [lang, setlang] = useState('es')

  const handleChangeLanguage = async (lang: string): Promise<void> => {
    setlang(lang)
    await i18n.changeLanguage(lang)
  }

  return (
    <div className="flex justify-center gap-1 text-sm">
      <button
        className={lang === 'es' ? 'text-persian-green-300' : 'text-black'}
        onClick={() => { void handleChangeLanguage('es') }}
      >
        ES
      </button>
      <span>/</span>
      <button
        className={lang === 'en' ? 'text-persian-green-300' : 'text-black'}
        onClick={() => { void handleChangeLanguage('en') }}
      >
        EN
      </button>
    </div>
  )
}
