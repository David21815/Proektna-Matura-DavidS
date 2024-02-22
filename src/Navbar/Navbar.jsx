import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import LinksNavbar from "./LinksNavbar";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-[10px] md:px-[40px] lg:px-[62px] py-4 items-center bg-[#AA96DA] sticky top-0 z-50">
        <BurgerButton />
        <Logo />
        <LinksNavbar />
      </nav>
    </>
  );
}

export default Navbar;
