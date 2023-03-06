import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { menuItems } from '../../constants'

export const MoblieMenu = (): JSX.Element => {
  const [t] = useTranslation()
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="block relative lg:hidden">
      <BiMenu className="text-white text-2xl" onClick={handleShowMenu} />
      {showMenu && (
        <div className="absolute bg-white shadow-md top-10 right-0 z-30 w-max rounded-lg">
          <ul className="mobileMainMenu">
            <>
              {menuItems.map((item) => (
                <li className="border-t border-gray-200" key={item.id}>
                  <NavLink to={item.url}>
                    {t(item.name)}
                  </NavLink>
                </li>
              ))}
            </>
          </ul>
        </div>
      )}
    </div>
  )
}
