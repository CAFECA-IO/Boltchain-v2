import styles from "../styles/index.module.css";
import myStyles from "../styles/navbar.module.css";

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
} from "reactstrap";
import Image from "next/image";

function MainNavbar() {
  //const [dropdownOpen, setDropdownOpen] = useState(false);
  //const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { t } = useTranslation("common");

  return (
    <div>
      <Navbar
        id="header-nav-bar"
        className={`navbar navbar-dark bg-info navbar-expand-lg ${myStyles.headerNavbar} ${myStyles.bg_info}`}
      >
        <NavbarBrand
          href="/"
          className="navbar-brand router-link-exact-active router-link-active"
          target="_self"
        >
          <Image
            src="/img/2019/05/bolt_logo_5.png"
            alt="logo"
            height={40}
            width={166.66}
            className={myStyles.navlogo}
          />
        </NavbarBrand>

        <NavbarToggler className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>

        <Collapse
          id="nav-collapse"
          className={`navbar-collapse collapse ${myStyles.invisible}`}
        >
          <Navbar className="navbar-nav ml-auto">
            <li
              className={`nav-item b-nav-dropdown dropdown nav-item ${myStyles.navitem} ${myStyles.dropdown}`}
              id="__BVID__11"
            >
              <a
                className="nav-link dropdown-toggle"
                id="__BVID__11__BV_button_"
                //target="_self"
                //href="#"
              >
                <span>{t("nav.about")}</span>
              </a>
              <ul
                //tabindex="-1"
                className="dropdown-menu dropdown-menu-right"
              >
                <li>
                  <a href="/#about" className="dropdown-item" target="_self">
                    {t("nav.aboutLink1")}
                  </a>
                </li>
                <li>
                  <a href="/#why" className="dropdown-item" target="_self">
                    {t("nav.aboutLink2")}
                  </a>
                </li>
                <li>
                  <a href="/#case" className="dropdown-item" target="_self">
                    {t("nav.aboutLink3")}
                  </a>
                </li>
                <li>
                  <a href="/#news" className="dropdown-item" target="_self">
                    {t("nav.aboutLink5")}
                  </a>
                </li>
                {/*                 <li role="presentation">
                  <a
                    href="/#team"
                    class="dropdown-item"
                    role="menuitem"
                    target="_self"
                  >
                    團隊介紹
                  </a>
                </li> */}
                <li>
                  <a href="/#contact" className="dropdown-item" target="_self">
                    {t("nav.aboutLink7")}
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item b-nav-dropdown dropdown nav-item"
              id="__BVID__31"
            >
              <a
                target="_self"
                href="#"
                className="nav-link dropdown-toggle"
                id="__BVID__31__BV_button_"
              >
                <span>{t("nav.solution")}</span>
              </a>
              <ul
                //tabindex="-1"
                className="dropdown-menu dropdown-menu-right"
              >
                <li>
                  <a
                    href="/bolt-trust"
                    className="dropdown-item"
                    target="_self"
                  >
                    {t("nav.trust")}
                  </a>
                </li>
                <li>
                  <a
                    href="/bolt-currency"
                    className="dropdown-item"
                    target="_self"
                  >
                    {t("nav.currency")}
                  </a>
                </li>
              </ul>
            </li>

            <li
              className={`nav-item nav-item nav-single-item ${myStyles.navitem} ${myStyles.nav_single_item}`}
            >
              <div
                //target="_self"
                //href="#"
                className={`nav-link ${myStyles.navlink}`}
              >
                <a href="/technology">{t("nav.technology")}</a>
              </div>
            </li>
            <li
              className={`nav-item nav-item nav-single-item ${myStyles.navitem} ${myStyles.nav_single_item}`}
            >
              <div
                //target="_self"
                //href="#"
                className={`nav-link ${myStyles.navlink}`}
              >
                <div>
                  <a href="/FAQ">{t("nav.faq")}</a>
                </div>
              </div>
            </li>

            <div id="nav-bar" className={myStyles.navbarline}></div>
            <li
              id="lang-dropdown"
              className="nav-item b-nav-dropdown dropdown nav-item"
            >
              <a
                id="lang-dropdown__BV_button_"
                target="_self"
                href="#"
                className="nav-link dropdown-toggle"
              >
                <span>繁中</span>
              </a>
              <ul
                //tabindex="-1"
                className="dropdown-menu dropdown-menu-right"
              >
                <li>
                  <a
                    //value="繁中"
                    target="_self"
                    href="#"
                    className="dropdown-item"
                  >
                    繁中
                  </a>
                </li>
                <li>
                  <a
                    //value="繁中"
                    target="_self"
                    href="#"
                    className="dropdown-item"
                  >
                    English
                  </a>
                </li>
              </ul>
            </li>
          </Navbar>
        </Collapse>
      </Navbar>
    </div>
    /*    <div className={styles.bg_info}>
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
              src="/img/2019/05/bolt_logo_5.png"
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
  </div>*/
  );
}
export default MainNavbar;
