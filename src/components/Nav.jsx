import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => (
  <header className="padding-x py-8 absolute z-10 w-full">
    <nav className="flex justify-between items-center max-container">
      <a href="/">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
      </a>
      <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li>
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-[#6d6d6d]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden max-lg:block cursor-pointer">
        <img src={hamburger} alt="hamburger" width={25} height={25} />
      </div>
    </nav>
  </header>
);

export default Nav;
