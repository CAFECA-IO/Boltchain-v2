import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Image from "next/image";
import Link from "next/link";

function MainNews() {
  const { t } = useTranslation("common");

  const contents = [1, 2, 3, 4];
  const news = contents.map((v) => {
    return (
      <div className={myStyles.news_ticket}>
        <Link href={t(`main.news.post${v}.link`) || ""}>
          <Image
            src={t(`main.news.post${v}.image`) || "/img/loading_icon.gif"}
            alt={t(`main.news.post${v}.title`) || "notfound"}
            width={360}
            height={270}
          />

          <p>{t(`main.news.post${v}.time`)}</p>
          <h3>{t(`main.news.post${v}.title`)}</h3>
        </Link>
      </div>
    );
  });

  return (
    <div className={myStyles.main_block}>
      <h1>{t("main.news.title")}</h1>
      <p className={styles.line}>__</p>

      <div className={myStyles.newsarea}>{news}</div>
    </div>
  );
}

export default MainNews;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
