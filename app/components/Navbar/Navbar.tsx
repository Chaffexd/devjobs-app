const Navbar = () => {
  return (
    <nav className="w-full bg-[url('/assets/desktop/bg-pattern-header.svg')] h-44 bg-no-repeat bg-cover">
        <div className="flex justify-between px-36 pt-12 h-full">
            <h1 className="text-white text-4xl">devjobs</h1>
            <p className="text-white text-2xl">Day/Night Toggle</p>
        </div>
    </nav>
  )
}

export default Navbar