import { useState } from "react";
import { UserMenuOptions } from "../Navbar";

export const UserMenu = () => {
  const [viewMenu, setViewMenu] = useState(false);

  const toggleViewUserMenu = () => {
    setViewMenu(!viewMenu);
  };

  return (
    <div className="relative">
      <div
        className="w-10 h-10 border-2 border-white rounded-full cursor-pointer"
        onClick={toggleViewUserMenu}
      >
        <img
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
          className="object-fill w-full h-full rounded-full"
          alt="avatar"
        />
      </div>
      {viewMenu && <UserMenuOptions />}
    </div>
  );
};
