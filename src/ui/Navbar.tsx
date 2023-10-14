import { useState } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import Hamburger from "hamburger-react";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
import { navItems } from "../constants/navList";
import CartPopup from "./CartPopup";
import CartAmount from "./CartAmount";

type NavbarTypes = {
  cartItem: { name: string; amount: number; price: number };
  handleRemoveItem: () => void;
};
const Navbar = ({ cartItem, handleRemoveItem }: NavbarTypes) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <header className="w-full relative">
      <nav className="section-center flex relative items-center justify-between border-b border-b-Grayishblue p-4 md:p-0 md:py-4">
        {/* left side */}
        <div className="flex gap-5 md:gap-14 items-center ">
          <div className="block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </div>
          <img src={logo} alt="logo" className="cursor-pointer h-fit" />
          <ul className="hidden md:flex items-center gap-5 ">
            {navItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="cursor-pointer group relative text-Darkgrayishblue hover:text-Verydarkblue transition-colors ease-in duration-150
                  after:w-0 after:hover:w-full after:transition-all
                  after:ease-in dura after:h-[3px] after:bg-NormalOrange after:absolute
                  after:left-0 after:-bottom-full after:top-[43px]"
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
            <li className="cursor-pointer group relative">
              <img
                src={cart}
                alt="cart"
                onClick={() => setOpenCart(!openCart)}
              />
              <CartAmount amount={cartItem.amount} />
            </li>
            <li className="cursor-pointer border-2 border-transparent hover:border-NormalOrange rounded-full transition-all ease-in duration-150">
              <img src={avatar} alt="avatar" className="max-w-[2.5rem]" />
            </li>
          </ul>
        </div>
      {openCart ? (
        <CartPopup
          openCart={openCart}
          cartItem={cartItem}
          handleRemoveItem={handleRemoveItem}
        />
      ) : null}
      </nav>
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <Overlay isOpen={isOpen} />
    </header>
  );
};

export default Navbar;
