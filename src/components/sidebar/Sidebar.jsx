import React from "react";
import { SiShopify } from "react-icons/si";
import { FcHome } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "./sidebar.css";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <FcHome className="icon_header" />
          DASHBOARD
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/">
            <SiShopify className="icon" /> --------------------
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> PAGE PAGE 1
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> PAGE PAGE 2
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" />
            PAGE PAGE 3
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> PAGE PAGE 4
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> PAGE PAGE 5
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> PAGE PAGE 6
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FcNext className="icon" />
            LOG OUT
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
