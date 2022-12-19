import myStyles from "../styles/navbar.module.css";
import LanguageSwitch from "./Language";

import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import Link from "next/link";
import Image from "next/image";

function MainNavbar() {
  const { t } = useTranslation("common");

  return (
    <nav
      id="headerNavbar"
      className={`navbar navbar-dark bg-info navbar-expand-lg ${myStyles.navbar_dark} ${myStyles.bg_info} ${myStyles.headerNavbar}`}
    >
      <Link
        href="/"
        className="navbar-brand router-link-exact-active router-link-active"
      >
        <Image
          src="/img/2019/05/bolt_logo_5.png"
          alt="logo"
          className={`nav_logo ${myStyles.navlogo}`}
          height={40}
          width={166.66}
        ></Image>
      </Link>

      <button className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        id="nav-collapse"
        className={`navbar-collapse collapse ${myStyles.invisible}`}
      >
        <ul className="navbar-nav ml-auto">
          <li
            className={`nav-item dropdown ${myStyles.navitem} ${myStyles.dropdown}`}
          >
            <Link
              href="#"
              className={`nav-link dropdown-toggle ${myStyles.navlink} ${myStyles.dropdown_toggle} `}
            >
              {t("nav.about")}
            </Link>
            <ul
              className={`dropdown-menu dropdown-menu-right ${myStyles.dropdownMenu}`}
            >
              <li>
                <Link
                  href="/#about"
                  className={`dropdown-item ${myStyles.dropdownItem}`}
                >
                  {t("nav.aboutLink1")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#why"
                  className={`dropdown-item ${myStyles.dropdownItem}`}
                >
                  {t("nav.aboutLink2")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#case"
                  className={`dropdown-item ${myStyles.dropdownItem}`}
                >
                  {t("nav.aboutLink3")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#news"
                  className={`dropdown-item ${myStyles.dropdownItem}`}
                >
                  {t("nav.aboutLink5")}
                </Link>
              </li>
              {/*               <li>
                <Link href="/#team" className={`dropdown-item ${myStyles.dropdownItem}`} >
                  團隊介紹
                </Link>
              </li> */}
              <li>
                <Link
                  href="/#contact"
                  className={`dropdown-item ${myStyles.dropdownItem}`}
                >
                  {t("nav.aboutLink7")}
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item dropdown ${myStyles.navitem} ${myStyles.dropdown}`}
          >
            <Link
              href="#"
              className={`nav-link dropdown-toggle ${myStyles.navlink} ${myStyles.dropdown_toggle}`}
            >
              {t("nav.solution")}
            </Link>
            <ul
              className={`dropdown-menu dropdown-menu-right ${myStyles.dropdownMenu}`}
            >
              <li>
                <Link
                  href="/bolt-trust"
                  className={`dropdown-item ${myStyles.dropdownItem}`}
                >
                  {t("nav.trust")}
                </Link>
              </li>
              <li>
                <Link
                  href="/bolt-currency"
                  className={`dropdown-item ${myStyles.dropdownItem}`}
                >
                  {t("nav.currency")}
                </Link>
              </li>
            </ul>
          </li>

          <li className={`nav-single-item ${myStyles.nav_single_item}`}>
            <Link href="/technology" className={`nav-link ${myStyles.navlink}`}>
              {t("nav.technology")}
            </Link>
          </li>
          <li className={`nav-single-item  ${myStyles.nav_single_item}`}>
            <Link href="/FAQ" className={`nav-link ${myStyles.navlink}`}>
              {t("nav.faq")}
            </Link>
          </li>

          <div id="nav-bar" className={myStyles.navbarline}></div>

          <li>
            <LanguageSwitch />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default MainNavbar;
