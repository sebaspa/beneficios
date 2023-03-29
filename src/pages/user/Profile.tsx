import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { InputText } from '../../components/Form'
import { type RootState } from '../../store'
import { getAllCountries } from '../../api'
import { type Country } from '../../types/country'

export const Profile = (): JSX.Element => {
  const [t] = useTranslation()
  const { user } = useSelector((store: RootState) => store.user)

  const textEmailRequired = t('validations.required', {
    field: t('user.email')
  })
  const textLastnameRequired = t('validations.required', {
    field: t('user.lastname')
  })
  const textNameRequired = t('validations.required', { field: t('user.name') })

  const textEmailNotValid = t('validations.not-valid', {
    field: t('user.email')
  })
  const textNameNotValid = t('validations.not-valid', {
    field: t('user.name')
  })
  const textLastnameNotValid = t('validations.not-valid', {
    field: t('user.lastname')
  })

  const textNameMin = t('validations.min', {
    field: t('user.name'),
    characters: '3'
  })
  const textLastnameMin = t('validations.min', {
    field: t('user.lastname'),
    characters: '3'
  })

  const textNameMax = t('validations.max', {
    field: t('user.name'),
    characters: '40'
  })
  const textLastnameMax = t('validations.max', {
    field: t('user.lastname'),
    characters: '40'
  })

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      lastname: user?.lastname,
      email: user?.email
    },
    validationSchema: Yup.object({
      email: Yup.string().required(textEmailRequired).email(textEmailNotValid),
      name: Yup.string()
        .required(textNameRequired)
        .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$/, textNameNotValid)
        .min(3, textNameMin)
        .max(40, textNameMax),
      lastname: Yup.string()
        .required(textLastnameRequired)
        .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$/, textLastnameNotValid)
        .min(3, textLastnameMin)
        .max(40, textLastnameMax)
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const [countries, setCountries] = useState<any>([])

  useEffect(() => {
    async function fetchCountries (): Promise<void> {
      try {
        const countriesData: [] | Country = await getAllCountries()
        setCountries(countriesData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCountries().then((response) => { console.log('In then block') })
      .catch((err) => { Error(err) })
  }, [])

  return (
    <div className="container mx-auto px-4 my-5">
      <div className="border border-gray-300 w-full rounded-2xl p-4 grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <img
            src={user?.photo}
            className="mx-auto w-36 h-36 rounded-full border-4 border-persian-green-400"
            alt="avatar"
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-10">
          <p className="text-2xl font-medium text-black mb-4">Mi perfil</p>
          <p className="text-sm md:text-base">
            {user?.name} {user?.lastname}
          </p>
        </div>
      </div>
      <form className="mt-10" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <InputText
              type="text"
              name="name"
              value={formik.values.name}
              errorText={formik.errors.name}
              labelText={t('user.name')}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              errorValidate={
                formik.touched.name !== undefined &&
                formik.errors.name !== undefined
              }
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputText
              type="text"
              name="lastname"
              value={formik.values.lastname}
              errorText={formik.errors.lastname}
              labelText={t('user.lastname')}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              errorValidate={
                formik.touched.lastname !== undefined &&
                formik.errors.lastname !== undefined
              }
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputText
              type="email"
              name="email"
              value={formik.values.email}
              errorText={formik.errors.email}
              labelText={t('user.email')}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              errorValidate={
                formik.touched.email !== undefined &&
                formik.errors.email !== undefined
              }
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <select name="country" id="country" className="w-full" value={user?.country} >
              <option value="">Selecciona</option>
              {
                countries.map((country: Country) => (
                  <option value={country.id} key={country.name}>{country.name}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn-contained-primary px-4 py-2 w-full md:w-auto"
            disabled={false}
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  )
}
