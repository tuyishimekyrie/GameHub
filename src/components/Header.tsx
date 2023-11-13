import logo from "../assets/logo.webp";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
interface Props {
  change: boolean;
  onClick: () => void;
}
const Header = ({ onClick, change }: Props) => {
    console.log(change)
  return (
    <div className="grid grid-cols-2  sm:grid sm:grid-cols-8  gap-2 ">
      <div className="w-10">
        <img src={logo} alt="logo" />
      </div>
      <div
        className={`flex items-center px-2 rounded-full gap-2 focus:outline-sky-400 ${
          change ? "bg-slate-800" : "bg-slate-400"
        } col-span-5`}
      >
        <MagnifyingGlassIcon className="w-4 sm:w-10" />
        <input
          type="text"
          placeholder="Search games"
          className={`bg-none outline-none ${
            change
              ? "bg-slate-800"
              : "bg-slate-400 text-black placeholder:text-black"
          }`}
        />
      </div>
      <div className="flex items-center gap-2 col-span-2 justify-end">
        <div
          className={`rounded-full w-10 h-4 ${
            change ? "bg-slate-600" : "bg-slate-700 before:bg-sky-400"
          }  before:absolute before:w-4 before:h-4 before:bg-green-500 before:rounded-full before:py-2 ${
            change ? "before:ml-6" : "before:p-0"
          } `}
          onClick={onClick}
        ></div>
        <p>{change ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default Header;
