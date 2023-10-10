import { useState } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import Hamburger from "hamburger-react";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
import { navItems } from "../constants/navList";
const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <header className="w-full relative">
      <nav className="section-center flex  items-center justify-between p-5">
        {/* left side */}
        <div className="flex gap-5 md:gap-14 items-center">
          <div className="block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </div>
          <img src={logo} alt="logo" className="cursor-pointer h-fit" />
          <ul className="hidden md:flex items-center gap-5 ">
            {navItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="cursor-pointer text-Darkgrayishblue hover:text-Verydarkblue transition-colors ease-in duration-150"
                >
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
        {/* right side */}
        <div>
          <ul className="flex items-center gap-10">
            <li className="cursor-pointer">
              <img src={cart} alt="cart" />
            </li>
            <li className="cursor-pointer">
              <img src={avatar} alt="avatar" className="max-w-[2.5rem]" />
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <Overlay isOpen={isOpen} />
    </header>
  );
};

export default Navbar;
