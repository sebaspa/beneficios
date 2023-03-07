import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { InputText } from '../../components/Form'
import { type RootState } from '../../store'

export const Profile = (): JSX.Element => {
  const [t] = useTranslation()
  const { user } = useSelector((store: RootState) => store.user)

  const textEmailRequired = t('validations.email-is-required')
  const textEmailNotValid = t('validations.email-not-valid')

  const formik = useFormik({
    initialValues: {
      email: user?.email
    },
    validationSchema: Yup.object({
      email: Yup.string().required(textEmailRequired).email(textEmailNotValid)
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

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
        <InputText
          type="email"
          name="email"
          value={formik.values.email}
          errorText={formik.errors.email}
          labelText="Correo"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          errorValidate={
            formik.touched.email !== undefined &&
            formik.errors.email !== undefined
          }
          inputClasses={
            formik.touched.email !== undefined &&
            formik.errors.email !== undefined
              ? 'inputText-primary inputText-primary-red'
              : 'inputText-primary inputText-primary-green'
          }
        />
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
