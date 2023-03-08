import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/redux'
import { InputText } from '../Form'
import { loginUser } from '../../features/user/userSlice'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
import { useTranslation } from 'react-i18next'

import { type RootState } from '../../store'

export const FormLogin = (): JSX.Element => {
  const { user, isLoading } = useSelector((store: RootState) => store.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  YupPassword(Yup)
  const [t] = useTranslation()
  const textEmailRequired = t('validations.email-is-required')
  const textEmailValidate = t('validations.email-not-valid')
  const textPasswordRequired = t('validations.password-is-required')
  const textPasswordNotValid = t('validations.password-not-valid')
  const textPasswordContainlowerCaseLetter = t(
    'validations.password-contain-1-lower-case-letter'
  )
  const textPasswordContainUpperCaseLetter = t(
    'validations.password-contain-1-upper-case-letter'
  )
  const textPasswordContainNumber = t('validations.password-contain-1-number')
  const textPasswordContainSpecialCharacter = t(
    'validations.password-contain-1-special-character'
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required(textEmailRequired).email(textEmailValidate),
      password: Yup.string()
        .required(textPasswordRequired)
        .min(8, textPasswordNotValid)
        .minLowercase(1, textPasswordContainlowerCaseLetter)
        .minUppercase(1, textPasswordContainUpperCaseLetter)
        .minNumbers(1, textPasswordContainNumber)
        .minSymbols(1, textPasswordContainSpecialCharacter)
    }),
    onSubmit: async (values) => {
      await dispatch(loginUser(values))
    }
  })

  useEffect(() => {
    if (user !== null) {
      navigate('/')
    }
  }, [user])

  return (
    <form className="w-full max-w-md" onSubmit={formik.handleSubmit}>
      <InputText
          type="email"
          name="email"
          value={formik.values.email}
          errorText={formik.errors.email}
          labelText={t('login.email')}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          errorValidate={
            formik.touched.email !== undefined &&
            formik.errors.email !== undefined
          }
        />
      <InputText
          type="password"
          name="password"
          value={formik.values.password}
          errorText={formik.errors.password}
          labelText={t('login.password')}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          errorValidate={
            formik.touched.password !== undefined &&
            formik.errors.password !== undefined
          }
        />
      <div>
        <button
          type="submit"
          className="btn-contained-primary px-4 py-2 w-full md:w-auto"
          disabled={isLoading}
        >
          {t('login.log-in')}
        </button>
      </div>
    </form>
  )
}
