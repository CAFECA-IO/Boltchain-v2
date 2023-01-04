import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";

function WhyBoltchain() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.main_block}>
      <h1>{t("main.why.title")}</h1>
      <p className={styles.line}>__</p>

      <div className={myStyles.why_intro}>
        <div className={myStyles.intro_ticket}>
          <span className={myStyles.iconbox}>
            <FontAwesomeIcon icon={faFlickr} className={myStyles.brandicon} />
          </span>
          <h3>{t("main.why.title1")}</h3>
          <p>{t("main.why.description1")}</p>
        </div>

        <div className={myStyles.intro_ticket}>
          <span className={myStyles.iconbox}>
            <FontAwesomeIcon icon={faFlickr} className={myStyles.brandicon} />
          </span>
          <h3>{t("main.why.title3")}</h3>
          <p>{t("main.why.description3")}</p>
        </div>

        <div className={myStyles.intro_ticket}>
          <span className={myStyles.iconbox}>
            <FontAwesomeIcon icon={faFlickr} className={myStyles.brandicon} />
          </span>
          <h3>{t("main.why.title4")}</h3>
          <p>{t("main.why.description4")}</p>
        </div>
      </div>
    </div>
  );
}
export default WhyBoltchain;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
