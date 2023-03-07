import { useState } from 'react'
import { useSelector } from 'react-redux'
import { UserMenuOptions } from '../Navbar'

import { type RootState } from '../../store'

export const UserMenu = (): JSX.Element => {
  const { user } = useSelector((store: RootState) => store.user)
  const [viewMenu, setViewMenu] = useState(false)

  const handleAvatarMenu = (): void => {
    setViewMenu(!viewMenu)
  }

  return (
    <div className="relative">
      <div
        className="w-10 h-10 border-2 border-white rounded-full cursor-pointer"
        onClick={handleAvatarMenu}
      >
        <img
          src={user?.photo}
          className="object-fill w-full h-full rounded-full avatar"
          alt="avatar"
        />
      </div>
      {viewMenu && <UserMenuOptions />}
    </div>
  )
}
