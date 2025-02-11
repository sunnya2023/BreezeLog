import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import Image from "../Image";
import { menuList } from "../../data";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 화면 크기 변화 감지
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // 원하는 breakpoint에 맞게 조정
        setOpen(false); // 화면 크기가 커지면 nav를 닫음
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav>
      <Link to="/" className="logo">
        <Image src="logo.png" alt="logo" w={30} h={30} />
        <span>BreezeLog</span>
      </Link>

      <div className="test">
        <ul className={`navlinks ${open ? "show_link" : "hide_link"}`}>
          {menuList.map(({ id, path, name }) => {
            return (
              <li key={id}>
                <NavLink
                  to={path}
                  // className={({ isActive }) =>
                  //   `${isActive && name !== "login" ? "active-nav" : ""}${
                  //     name === "login" ? "btn" : ""
                  //   }`
                  // }
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          <SignedOut>
            <Link to="/login" className={"btn"}>
              Login
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ul>

        <div className="menu-icons" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
