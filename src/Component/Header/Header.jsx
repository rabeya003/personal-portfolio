const Header = () => {
  const navber = (
    <div>
      <li>
        <a href="">Projects</a>
      </li>
      <li>
        <a href="">Skils</a>
      </li>
      <li>
        <a href="">Contact Me</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
    </div>
  );
  return (
    <div className="navbar max-w-7xl mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navber}
          </ul>
        </div>
        {/*<a className="btn btn-ghost normal-case text-xl">daisyUI</a>*/}
        <img
          className="h-20"
          src="https://i.ibb.co/dpBpRH0/abeya-copy.png"
          alt=""
        />
      </div>
      <div className="gap-4 navbar-end hidden lg:flex">
        <ul className="  menu-horizontal px-1">
          <li className="hover:bg-slate-800 mx-4 p-2 rounded-md  hover:text-white text-white bg-slate-500">
            <a className="">Projects</a>
          </li>
          <li className="hover:bg-slate-800 mx-4 p-2 rounded-md  hover:text-white text-white bg-slate-500 w-20 text-center">
            <a href="">Skils</a>
          </li>

          <li className="hover:bg-slate-800 mx-4 p-2 rounded-md  hover:text-white text-white bg-slate-500">
            <a>Contact Me</a>
          </li>
          <li className="hover:bg-slate-800 mx-4 p-2 rounded-md  hover:text-white text-white bg-slate-500">
            <a>About</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
  </div>*/}
    </div>
  );
};

export default Header;
