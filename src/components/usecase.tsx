import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import Link from "next/link";

function UseCase() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.usecase_main}>
      <div className={myStyles.usecase_theme}>
        <h1>{t("main.case.title")}</h1>
        <p className={styles.line}>__</p>

        <div className={myStyles.usecaseCard}>
          <figure>
            <Image
              src={`${t("main.case.image1")}`}
              alt=""
              width={360}
              height={270}
              className={myStyles.usecaseImg}
            />
          </figure>
          <div className={myStyles.usecaseTextbox}>
            <h2>{t("main.case.title1")}</h2>
            <p>{t("main.case.description1Line1")}</p>
            <p>{t("main.case.description1Line2")}</p>
            <p>{t("main.case.description1Line3")}</p>

            <Link href="/trust" className={myStyles.usecaseLink}>
              {t("main.case.linkTitle")}
            </Link>
          </div>
        </div>

        <div className={myStyles.usecaseCard}>
          <figure>
            <Image
              src={`${t("main.case.image2")}`}
              alt=""
              width={360}
              height={270}
              className={myStyles.usecaseImg}
            />
          </figure>
          <div className={myStyles.usecaseTextbox}>
            <h2>{t("main.case.title2")}</h2>
            <p>{t("main.case.description2")}</p>
          </div>
        </div>

        <div className={myStyles.usecaseCard}>
          <figure>
            <Image
              src={`${t("main.case.image3")}`}
              alt=""
              width={360}
              height={270}
              className={myStyles.usecaseImg}
            />
          </figure>
          <div className={myStyles.usecaseTextbox}>
            <h2>{t("main.case.title3")}</h2>
            <p>{t("main.case.description3")}</p>

            <Link href="/trust" className={myStyles.usecaseLink}>
              <FontAwesomeIcon
                icon={faApple}
                className={myStyles.usecaseLink_icon}
              />
              {t("main.case.linkTitle2")}
            </Link>
            <Link href="/trust" className={myStyles.usecaseLink}>
              <FontAwesomeIcon
                icon={faAndroid}
                className={myStyles.usecaseLink_icon}
              />
              {t("main.case.linkTitle3")}
            </Link>
          </div>
        </div>

        <div className={myStyles.usecaseCard}>
          <figure>
            <Image
              src={`${t("main.case.image4")}`}
              alt=""
              width={360}
              height={270}
              className={myStyles.usecaseImg}
            />
          </figure>
          <div className={myStyles.usecaseTextbox}>
            <h2>{t("main.case.title4")}</h2>
            <p>{t("main.case.description4Line1")}</p>
            <p>{t("main.case.description4Line2")}</p>

            <Link href="/trust" className={myStyles.usecaseLink}>
              <FontAwesomeIcon
                icon={faApple}
                className={myStyles.usecaseLink_icon}
              />
              {t("main.case.linkTitle2")}
            </Link>
            <Link href="/trust" className={myStyles.usecaseLink}>
              <FontAwesomeIcon
                icon={faAndroid}
                className={myStyles.usecaseLink_icon}
              />
              {t("main.case.linkTitle3")}
            </Link>
          </div>
        </div>

        <div className={myStyles.usecaseCard}>
          <figure>
            <Image
              src={`${t("main.case.image5")}`}
              alt=""
              width={360}
              height={270}
              className={myStyles.usecaseImg}
            />
          </figure>
          <div className={myStyles.usecaseTextbox}>
            <h2>{t("main.case.title5")}</h2>
            <p>{t("main.case.description5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UseCase;
