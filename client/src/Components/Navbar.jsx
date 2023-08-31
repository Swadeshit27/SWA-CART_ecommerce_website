import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsPerson, BsBoxSeam, BsSun, BsMoonStars } from "react-icons/bs";
import { setLogout, setMode } from "../State";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Items = useSelector(state => state.Items);
  const user = useSelector(state => state.user);
  const [SubNav, setSubNav] = useState(false);
  const [nav, setNav] = useState(true);
  // dark and light mode
  const mode = useSelector((state) => state.mode);
  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  });

  return (
    <div className="w-full shadow-lg  z-10 bg-white dark:bg-black dark:text-white">
      <div className=" max-w-[1400px] mx-auto h-20  flex justify-between items-center md:flex-row p-4 sm:p-8">
        <div className="flex cursor-pointer" onClick={(e) => navigate("/")}>
          <img src="logo2.png" alt="logo" className="w-32 h-32" />
        </div>

        <div className="flex gap-2 md:gap-6">
          <div className="nav-icon ">
            <FiSearch size={20} />
          </div>
          <Link to={"/cart"}>
            <Badge count={Items.length}>
              <div className="nav-icon">
                <IoMdCart size={23} />
              </div>
            </Badge>
          </Link>
          <div className="nav-icon relative">
            <Avatar
              src={user ? `http://localhost:6001/assets/${user.photo}` : ""}
              size="large"
              icon={<UserOutlined />}
              onClick={(e) => setSubNav(!SubNav)}
            />
            <div
              className={
                SubNav
                  ? " w-[12rem] py-2 min-h-20 absolute top-12 right-[-1rem]  z-10 rounded-md shadow-md border dark:border-black_300 bg-white_900 text-black_700 dark:text-white_700 dark:bg-black_900 "
                  : "hidden"
              }
            >
              <Link to={'/profile'}>
                <div className="nav_SubItem" onClick={(e) => setSubNav(false)}>
                  <BsPerson className="me-2" />
                  my profile
                </div>
              </Link>
              <Link to={'/watch'}>
                <div className="nav_SubItem" onClick={(e) => setSubNav(false)}>
                  <AiFillHeart className="me-2" />
                  WatchList
                </div>
              </Link>
              <Link to={'/history'}>
                <div className="nav_SubItem" onClick={(e) => setSubNav(false)}>
                  <BsBoxSeam className="me-2" />
                  orders
                </div>
              </Link>
              <div
                className="nav_SubItem"
                onClick={(e) => dispatch(setMode(), setSubNav(false))}
              >
                {mode=='dark' ?
                  <>
                    <BsMoonStars className="me-2" />
                    dark Mode
                  </> :
                  <>
                    <BsSun className="me-2" />
                    Light Mode
                  </>
                }
              </div>
              <div className="nav_SubItem" onClick={(e) => { dispatch(setLogout()), setNav(!nav) }}>
                <FiLogOut className="me-2" />
                log out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
