import Link from "next/link";
import { useRouter } from "next/router";
import myStyles from "../styles/navbar.module.css";

const LanguageSwitch = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const lang: string = router.locale === "en" ? "English" : "繁中";

  return (
    <div
      id={myStyles.lang_dropdown}
      className={` ${myStyles.navitem} ${myStyles.dropdown}`}
    >
      <Link
        href="#"
        className={`nav-link dropdown-toggle ${myStyles.navlink} `}
      >
        {lang}
      </Link>

      <ul
        className={`dropdown-menu dropdown-menu-right ${myStyles.dropdownMenu}`}
      >
        <li>
          <Link
            className={`dropdown-item ${myStyles.dropdownItem}`}
            locale="tw"
            href={{ pathname, query }}
          >
            繁中
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${myStyles.dropdownItem}`}
            locale="en"
            href={{ pathname, query }}
          >
            English
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitch;
