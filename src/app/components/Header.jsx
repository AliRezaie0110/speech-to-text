import { FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <div className="flex justify-end">
      <div className="relative inline-flex items-center">
        <FiUser className="absolute right-3 text-[#00BA9F] pointer-events-none" />
        <select className=" border border-2-[#00BA9F] font-bold text-[#00BA9F] rounded-full px-4 py-1 text-sm pr-10">
          <option value="guest">مهمان</option>
          <option value="login">ورود</option>
        </select>
      </div>
    </div>
  );
}
