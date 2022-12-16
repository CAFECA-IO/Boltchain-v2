import styles from "../styles/index.module.css";
import myStyles from "../styles/navbar.module.css";

import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import { Navbar, Nav, NavbarBrand, Dropdown, Collapse } from "react-bootstrap";
import Image from "next/image";

function MainNavbar() {
  const { t } = useTranslation("common");

  return (
    <div>
      <Nav
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

        <Navbar.Toggle className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Collapse className={`navbar-collapse collapse ${myStyles.invisible}`}>
          <Navbar className="navbar-nav ml-auto">
            <Nav.Item
              className={`nav-item nav-item nav-single-item ${myStyles.navitem}`}
            >
              <Dropdown
                className={`nav-dropdown dropdown nav-item ${myStyles.dropdown}`}
              >
                <Dropdown.Toggle
                  className={`nav-link dropdown-toggle ${myStyles.dropdown_toggle}`}
                >
                  {t("nav.about")}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                  <Dropdown.Item className="dropdown-item">
                    {t("nav.aboutLink1")}
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    {t("nav.aboutLink2")}
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    {t("nav.aboutLink3")}
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    {t("nav.aboutLink5")}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item
              className={`nav-item nav-item nav-single-item ${myStyles.navitem}`}
            >
              <Dropdown
                className={`nav-dropdown dropdown nav-item ${myStyles.dropdown}`}
              >
                <Dropdown.Toggle
                  className={`nav-link dropdown-toggle ${myStyles.dropdown_toggle}`}
                >
                  {t("nav.solution")}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                  <Dropdown.Item className="dropdown-item">
                    {t("nav.trust")}
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    {t("nav.currency")}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>

            <Nav.Item
              className={`nav-item nav-item nav-single-item ${myStyles.navitem} ${myStyles.nav_single_item}`}
            >
              <Nav.Link
                href="/technology"
                className={`nav-link ${myStyles.navlink}`}
              >
                {t("nav.technology")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={`nav-item nav-item nav-single-item ${myStyles.navitem} ${myStyles.nav_single_item}`}
            >
              <Nav.Link href="/FAQ" className={`nav-link ${myStyles.navlink}`}>
                {t("nav.faq")}
              </Nav.Link>
            </Nav.Item>

            <div id="nav-bar" className={myStyles.navbarline}></div>

            <Nav.Item
              id="lang_dropdown"
              className={`nav-item nav-item nav-single-item ${myStyles.navitem}`}
            >
              <Dropdown
                className={`nav-dropdown dropdown nav-item ${myStyles.dropdown}`}
              >
                <Dropdown.Toggle
                  className={`nav-link dropdown-toggle ${myStyles.dropdown_toggle}`}
                >
                  繁中
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                  <Dropdown.Item className="dropdown-item">繁中</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    English
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Navbar>
        </Collapse>
      </Nav>
    </div>
  );
}
export default MainNavbar;
