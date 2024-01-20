import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-[url('/assets/desktop/bg-pattern-header.svg')] h-44 bg-no-repeat bg-cover">
      <div className="flex justify-between px-36 pt-12 h-full">
        <Link href={"/"}>
          <h1 className="text-white text-4xl">devjobs</h1>
        </Link>
        <p className="text-white text-2xl">Day/Night Toggle</p>
      </div>
    </nav>
  );
};

export default Navbar;
