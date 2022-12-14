import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

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
  Container,
} from "reactstrap";
import Image from "next/image";

import styles from "../styles/navbar.module.css";

function MainNavbar() {
  //const [dropdownOpen, setDropdownOpen] = useState(false);
  //const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { t } = useTranslation("lang");

  return (
    <div className={styles.bg_info}>
      <input
        type="checkbox"
        id="menu_control"
        className={styles.menu_control}
      ></input>
      <nav className={styles.headerNavbar}>
        <div className={styles.navlogo}>
          <a href="/">
            <Image
              className={styles.navlogo}
              src="/img/bolt_logo_5.png"
              alt="logo"
              width={166.66}
              height={40}
            />
          </a>
        </div>
        <ul>
          <li className={styles.dropdown}>
            <div className={styles.navitem}>
              <a href="">{t("nav.about")}</a>
              <div className={styles.dropdownMenu}>
                <a className={styles.dropdownItem} href="">
                  {t("nav.aboutLink1")}
                </a>
                <a className={styles.dropdownItem} href="">
                  {t("nav.aboutLink2")}
                </a>
                <a className={styles.dropdownItem} href="">
                  {t("nav.aboutLink3")}
                </a>
                <a className={styles.dropdownItem} href="">
                  {t("nav.aboutLink4")}
                </a>
                <a className={styles.dropdownItem} href="">
                  {t("nav.aboutLink5")}
                </a>
                <a className={styles.dropdownItem} href="">
                  {t("nav.aboutLink6")}
                </a>
                <a className={styles.dropdownItem} href="">
                  {t("nav.aboutLink7")}
                </a>
              </div>
            </div>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.navitem}>
              <a href="">{t("nav.solution")}</a>
              <div className={styles.dropdownMenu}>
                <a className={styles.dropdownItem} href="">
                  {t("nav.trust")}
                </a>
                <a className={styles.dropdownItem} href="">
                  {t("nav.currency")}
                </a>
              </div>
            </div>
          </li>
          <li className={styles.nav_single_item}>
            <a href="">{t("nav.technology")}</a>
          </li>
          <li className={styles.nav_single_item}>
            <a href="">{t("nav.faq")}</a>
          </li>

          <li className={styles.navbarline}></li>

          <li className={styles.dropdown}>
            <div className={styles.navitem}>
              <a href="">語言</a>
              <div className={styles.dropdownMenu}>
                <a className={styles.dropdownItem} href="">
                  繁中
                </a>
                <a className={styles.dropdownItem} href="">
                  English
                </a>
              </div>
            </div>
          </li>
        </ul>
        <label htmlFor="menu_control" className={styles.burgerbtn}></label>
      </nav>

      {/* <Navbar
        expand="lg"
        bg="dark"
        variant="info"
        id="header-nav-bar"
        className={styles.headerNavbar}
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
                <a href="">{t("nav.about")}</a>
              </DropdownToggle>

              <DropdownMenu className={styles.dropdown}>
                <DropdownItem className={styles.dropdownItem && styles.navitem}>
                  <a href="">什麼是閃電鏈</a>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem && styles.navitem}>
                  <a href="">為何用閃電鏈</a>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem && styles.navitem}>
                  <a href="">應用案例</a>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem && styles.navitem}>
                  <a href="">產品路線圖</a>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem && styles.navitem}>
                  <a href="">最新消息</a>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem && styles.navitem}>
                  <a href="">團隊介紹</a>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem && styles.navitem}>
                  聯絡我們
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div id="nav-bar"></div>

                         <Dropdown>
              <DropdownMenu class="nav-item" id="lang-dropdown" right>
                <DropdownItem value="1">繁中</DropdownItem>
                <DropdownItem value="2">English</DropdownItem>
              </DropdownMenu>
            </Dropdown> 
          </Nav>
        </Collapse>
      </Navbar> */}
    </div>
  );
}
export default MainNavbar;
