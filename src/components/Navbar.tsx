import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import ScrollToTop from "react-scroll-to-top";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Image from "next/image";

import styles from "../styles/index.module.css";

function MainNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { t } = useTranslation("lang");

  return (
    <div className={styles.bg_info}>
      <Navbar
        expand="lg"
        bg="dark"
        variant="info"
        id="header-nav-bar"
        className={styles.headerNavbarWhite}
        //class="{ 'header-nav-bar-white': scrolled }"
        //on-scroll="handleScroll"
      >
        <NavbarBrand href="/">
          <Image
            className={styles.navlogo}
            src="/img/bolt_logo_5.png"
            alt="logo"
            width={166.66}
            height={40}
          />
        </NavbarBrand>

        <NavbarToggler target="nav-collapse"></NavbarToggler>

        <Collapse id="nav-collapse">
          <Nav>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret className={styles.navitem}>
                {t("nav.about")}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className={styles.navitem}>
                  什麼是閃電鏈
                </DropdownItem>
                <DropdownItem>為何用閃電鏈</DropdownItem>
                <DropdownItem>應用案例</DropdownItem>
                <DropdownItem>產品路線圖</DropdownItem>
                <DropdownItem>最新消息</DropdownItem>
                <DropdownItem>團隊介紹</DropdownItem>
                <DropdownItem>聯絡我們</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div id="nav-bar"></div>

            {/*             <Dropdown>
              <DropdownMenu class="nav-item" id="lang-dropdown" right>
                <DropdownItem value="1">繁中</DropdownItem>
                <DropdownItem value="2">English</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default MainNavbar;
