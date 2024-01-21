import Link from "next/link";
import Switcher from "../Toggle/Switchers";

const Navbar = () => {

  return (
    <nav className="w-full bg-[url('/assets/mobile/bg-pattern-header.svg')] sm:bg-[url('/assets/desktop/bg-pattern-header.svg')] h-44 sm:bg-no-repeat sm:bg-cover px-8">
      <div className="flex justify-between max-w-5xl w-full m-auto pt-8 sm:pt-12 h-full">
        <Link href={"/"} className="h-10">
          <h1 className="text-white text-4xl">devjobs</h1>
        </Link>
        <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
