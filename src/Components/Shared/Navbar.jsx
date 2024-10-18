import { Link, NavLink } from "react-router-dom";

const NavBar=()=>{
    const links=<>
    <li className="mr-6 hover:text-amber-500	font-semibold"><NavLink to='/home'>Home</NavLink></li>
    <li className="mr-6  hover:text-amber-500	font-semibold"><NavLink to='applied'>Applied Jobs</NavLink></li>
    <li className="mr-6  hover:text-amber-500	font-semibold"><NavLink to='jobs'>Jobs</NavLink></li>
    <li className="mr-6  hover:text-amber-500	font-semibold"><NavLink to='blog'>Blog</NavLink></li>
    </>
    return (

        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link to='/home' className="cursor-pointer hover:text-amber-500	font-semibold lg:text-2xl md:text-xl ">Jobs BD</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="common-btn hover: hover:bg-amber-500	font-semibold py-[5px] lg:py-[10px] px-2 lg:px-[15px] ">Start Applying</a>
  </div>
</div>
    )
};

export default NavBar;