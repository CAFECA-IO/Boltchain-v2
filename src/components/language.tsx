import Link from "next/link";
import { useRouter } from "next/router";
import myStyles from "../styles/navbar.module.css";

const LanguageSwitch = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const lang: string = router.locale === "en" ? "English" : "繁中";

  return (
    <div id={myStyles.lang_dropdown}>
      <div className={`${myStyles.navitem} ${myStyles.dropdown}`}>
        <label className={myStyles.navlink}>{lang}</label>

        <ul className={myStyles.dropdownMenu}>
          <li>
            <Link className={myStyles.dropdownItem} locale="tw" href={router}>
              繁中
            </Link>
          </li>
          <li>
            <Link className={myStyles.dropdownItem} locale="en" href={router}>
              English
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitch;
