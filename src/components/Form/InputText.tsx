import { AiFillInfoCircle } from 'react-icons/ai'

interface PropsInputText {
  type: string
  name: string
  value: string | number | undefined
  errorText: string | undefined
  labelText: string
  inputClasses: string
  errorValidate: boolean
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  handleBlur: React.FocusEventHandler<HTMLInputElement>
}

export const InputText = ({
  type,
  name,
  value,
  errorText,
  labelText,
  inputClasses,
  errorValidate,
  handleChange,
  handleBlur
}: PropsInputText): JSX.Element => {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        placeholder=" "
        name={name}
        className={inputClasses}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <AiFillInfoCircle
        className={`absolute text-red-600 top-3 right-3 text-md ${
          errorValidate ? 'block' : 'hidden'
        }`}
      />
      <label className="absolute top-2 left-3 text-sm duration-300 origin-top-left -z-10">
        {labelText}
      </label>
      {errorValidate
        ? (
        <p className="text-red-600 text-xs mt-1">{errorText}</p>
          )
        : null}
    </div>
  )
}
