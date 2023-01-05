import Link from "next/link";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";

import myStyles from "../styles/navbar.module.css";

const LanguageSwitch = (toggleHandler: any) => {
  const router = useRouter();
  //const { pathname, query } = router;

  //讀取 cookie -> 讀取瀏覽器 -> 預設為 en
  const cookies = new Cookies();
  const currentLanguage = cookies.get("i18next") || "en";
  const switchLanguage = (lang: string) => {
    // to do
  };
  const setLanguage = (lang: string) => {
    cookies.set("i18next", lang);
    // toggleHandler();
    switchLanguage(lang);
  };
  switchLanguage(currentLanguage);

  //切換選單上的顯示
  const lang: string = router.locale === "en" ? "English" : "繁中";

  return (
    <div id={myStyles.lang_dropdown}>
      <div className={`${myStyles.navitem} ${myStyles.dropdown}`}>
        <label className={myStyles.navlink}>{lang}</label>

        <ul className={myStyles.dropdownMenu}>
          <li>
            <Link
              className={myStyles.dropdownItem}
              onClick={() => setLanguage("tw")}
              locale="tw"
              href={router}
            >
              繁中
            </Link>
          </li>
          <li>
            <Link
              className={myStyles.dropdownItem}
              locale="en"
              onClick={() => setLanguage("tw")}
              href={router}
            >
              English
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitch;
