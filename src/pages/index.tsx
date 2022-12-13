import styles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("lang");

  return (
    <div className={styles.container}>
      <div className={styles.fullwidth_container}>
        <div className={styles.container_center}>
          <div className={styles.pageTitle}>
            <img
              src="/img/bolt_logo_7.png"
              className={styles.slide1_logo}
              alt="Boltchain_logo_white"
            />
            <h1 className={styles.page_title}>{t("main.title")}</h1>
            <h1 className={styles.subtitle}>{t("main.description")}</h1>
            <img
              src="/img/Scroll-Down-icon-Home3.gif"
              alt=""
              className={styles.ls_layer}
              /*data-ls="delayin:1000;easingin:easeInExpo;transitionout:false;"
              data-ls-slidein="1"
              data-ls-slideout="1" @click="scrollToOneAnchor('about')*/
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
