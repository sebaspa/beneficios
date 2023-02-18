import { BsFillBellFill } from "react-icons/bs";

export const Notification = () => {
  return (
    <div className="relative">
      <div className="w-3 h-3 rounded-full bg-red-600 border border-white absolute -top-1 right-0"></div>
      <BsFillBellFill className="text-white text-2xl" />
    </div>
  );
};
