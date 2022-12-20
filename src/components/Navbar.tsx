import myStyles from "../styles/navbar.module.css";
import LanguageSwitch from "./language";

import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import Link from "next/link";
import Image from "next/image";

function MainNavbar() {
  const { t } = useTranslation("common");
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <>
      <nav
        className={`${myStyles.navbar_dark} ${myStyles.bg_info} ${myStyles.headerNavbar}`}
      >
        <a href="/#">
          <Image
            src="/img/2019/05/bolt_logo_5.png"
            alt="logo"
            className={myStyles.navlogo}
            height={40}
            width={166.66}
          ></Image>
        </a>

        <div className={myStyles.navToggler}></div>

        <div
          className={showSubMenu ? myStyles.showMenu : myStyles.collapseMenu}
        >
          <ul>
            <li className={`${myStyles.navitem} ${myStyles.dropdown}`}>
              <Link
                href="#"
                className={`${myStyles.navlink} ${myStyles.dropdown_toggle} `}
              >
                {t("nav.about")}
              </Link>
              <ul className={myStyles.dropdownMenu}>
                <li>
                  <Link href="/#about" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink1")}
                  </Link>
                </li>
                <li>
                  <Link href="/#why" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink2")}
                  </Link>
                </li>
                <li>
                  <Link href="/#case" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink3")}
                  </Link>
                </li>
                <li>
                  <Link href="/#news" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink5")}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink7")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className={` ${myStyles.navitem} ${myStyles.dropdown}`}>
              <Link
                href="#"
                className={`${myStyles.navlink} ${myStyles.dropdown_toggle}`}
              >
                {t("nav.solution")}
              </Link>
              <ul className={myStyles.dropdownMenu}>
                <li>
                  <Link href="/bolt-trust" className={myStyles.dropdownItem}>
                    {t("nav.trust")}
                  </Link>
                </li>
                <li>
                  <Link href="/bolt-currency" className={myStyles.dropdownItem}>
                    {t("nav.currency")}
                  </Link>
                </li>
              </ul>
            </li>

            <li className={myStyles.nav_single_item}>
              <Link href="/technology" className={myStyles.navlink}>
                {t("nav.technology")}
              </Link>
            </li>
            <li className={myStyles.nav_single_item}>
              <Link href="/FAQ" className={myStyles.navlink}>
                {t("nav.faq")}
              </Link>
            </li>

            <div className={myStyles.navbarline}></div>

            <li>
              <LanguageSwitch />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MainNavbar;
