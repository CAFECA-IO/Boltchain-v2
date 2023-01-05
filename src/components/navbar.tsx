import myStyles from "../styles/navbar.module.css";
import LanguageSwitch from "./language";

import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

function MainNavbar() {
  const { t } = useTranslation("common");

  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleNavbar = () => setShowSubMenu(!showSubMenu);

  const subMenuStyle = showSubMenu ? myStyles.showMenu : myStyles.collapseMenu;

  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollMenuStyle =
    scroll >= 200 ? myStyles.headerNavbarWhite : myStyles.headerNavbar;

  return (
    <>
      <nav className={`${myStyles.bg_info} ${scrollMenuStyle}`}>
        <a href="/#">
          <Image
            className={myStyles.navlogo}
            src="/img/transparent.png"
            alt=""
            height={40}
            width={166.66}
          ></Image>
        </a>

        <label onClick={toggleNavbar} className={myStyles.navToggler}>
          <span>
            <Image
              className={myStyles.burger}
              src="/img/burger_menu.svg"
              alt=""
              width={35}
              height={35}
            />
          </span>
        </label>

        <div className={subMenuStyle}>
          <ul>
            <li className={`${myStyles.navitem} ${myStyles.dropdown}`}>
              <label
                className={`${myStyles.navlink} ${myStyles.dropdown_toggle} `}
              >
                {t("nav.about")}
              </label>
              <ul className={myStyles.dropdownMenu}>
                <li>
                  <a href="/#about" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink1")}
                  </a>
                </li>
                <li>
                  <a href="/#why" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink2")}
                  </a>
                </li>
                <li>
                  <a href="/#case" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink3")}
                  </a>
                </li>
                <li>
                  <a href="/#news" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink5")}
                  </a>
                </li>
                <li>
                  <a href="/#contact" className={myStyles.dropdownItem}>
                    {t("nav.aboutLink7")}
                  </a>
                </li>
              </ul>
            </li>
            <li className={`${myStyles.navitem} ${myStyles.dropdown}`}>
              <label
                className={`${myStyles.navlink} ${myStyles.dropdown_toggle}`}
              >
                {t("nav.solution")}
              </label>
              <ul className={myStyles.dropdownMenu}>
                <li>
                  <Link href="/trust" className={myStyles.dropdownItem}>
                    {t("nav.trust")}
                  </Link>
                </li>
                <li>
                  <Link href="/currency" className={myStyles.dropdownItem}>
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
