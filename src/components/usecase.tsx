import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

function UseCase() {
  const { t } = useTranslation("common");

  return (
    <div className={`${myStyles.container_fluid} ${myStyles.usecase_main}`}>
      <div className={myStyles.usecase_theme}>
        <h1>{t("main.case.title")}</h1>
        <p className={myStyles.usecase01}>__</p>

        <div className={myStyles.usecaseCard}>
          <figure>
            <a href={`${t("main.news.post1.link")}`}>
              <Image
                src={`${t("main.news.post1.image")}`}
                alt=""
                width={360}
                height={270}
                className={myStyles.usecaseImg}
              />
            </a>
          </figure>
          <div className={myStyles.usecaseTextbox}>
            <h2>{t("main.case.title1")}</h2>
            <p>{t("main.case.description1")}</p>

            <Link href="/bolt-trust" className={myStyles.usecaseLink}>
              {t("main.case.linkTitle")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UseCase;
