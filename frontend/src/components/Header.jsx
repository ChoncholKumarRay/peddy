import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = ({ onLoginClick }) => {
  const navigate = useNavigate();
  return (
    <header className="p-2">
      <nav className="max-w-[1270px] mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li>
                  <a>Shop</a>
                </li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <div className="flex gap-[10px] items-center">
              <div><img src="/images/logo.webp" alt="Peddy Logo" /></div>
              <div>
                <p className="font-extrabold text-black text-[32px]">Peddy</p>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a className="text-gray-500 text-[16px]" onClick={() => navigate('/')}>Home</a></li>
              <li><a className="text-gray-500 text-[16px]" onClick={() => navigate('/shop')}>Shop</a></li>
              <li><a className="text-gray-500 text-[16px]">Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <button
              className="btn bg-inherit border-blue-100 rounded-full"
              onClick={onLoginClick}
            >
              <i className="fa-regular fa-user"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;