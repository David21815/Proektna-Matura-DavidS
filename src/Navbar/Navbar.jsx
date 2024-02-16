import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import LinksNavbar from "./LinksNavbar";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-[62px] py-6 mb-[96px] items-center bg-[#AA96DA]">
        <BurgerButton />
        <Logo />
        <LinksNavbar />
      </nav>
    </>
  );
}

export default Navbar;
