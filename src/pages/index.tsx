import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

import WhyBoltchain from "../components/why";
import UseCase from "../components/usecase";
import ContactUsForm from "../components/contactform";
import MainNews from "../components/news";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.fullwidth_container}>
        <div className={myStyles.container_center}>
          <div className={myStyles.pageTitle}>
            <Image
              src="/img/main/bolt_logo_7.png"
              alt="Boltchain_logo_white"
              width={200}
              height={50}
            />
            <h1 className={styles.page_title}>{t("main.title")}</h1>
            <h1 className={myStyles.subtitle}>{t("main.description")}</h1>
            <Link href="#about">
              <Image
                src="/img/main/scroll_down_icon.gif"
                alt=""
                width={50}
                height={50}
                className={myStyles.ls_layer}
              />
            </Link>
          </div>
        </div>
      </div>

      <div id="about" className={myStyles.container_fluid}>
        <div className={myStyles.main_block}>
          <h1>{t("main.about.title")}</h1>
          <p className={styles.line}>__</p>
          <p>{t("main.about.description")}</p>
        </div>
      </div>

      <div id="why" className={myStyles.container_fluid}>
        <WhyBoltchain />
      </div>

      <div id="case" className={myStyles.container_fluid}>
        <UseCase />
      </div>

      <div id="news" className={myStyles.container_fluid}>
        <MainNews />
      </div>

      <div id="contact">
        <ContactUsForm />
      </div>
    </>
  );
}
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
