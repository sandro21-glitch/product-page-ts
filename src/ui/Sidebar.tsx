import closeBtn from "../assets/icon-close.svg";
import { navItems } from "../constants/navList";
type SidebarProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};
const Sidebar = ({ isOpen, setOpen }: SidebarProps) => {
  return (
    <aside
      className={`absolute left-0 top-0 ${
        isOpen ? "translate-x-0 " : "translate-x-[-200%]"
      } w-screen h-screen
       transition-all ease-linear duration-300 flex items-center z-[99999]`}
    >
      <div className="bg-white p-10 w-[70%] h-full">
        <button onClick={() => setOpen(false)} className="mb-10 outline-none">
          <img src={closeBtn} alt="close button" className="w-[1rem]" />
        </button>
        <ul className="flex flex-col gap-5">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className="font-bold text-[1rem] text-Verydarkblue cursor-pointer"
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
