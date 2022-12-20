import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

function UseCase() {
  const { t } = useTranslation("common");

  return (
    <div
      className={`container-fluid ${myStyles.container_fluid} ${myStyles.usecase01}`}
    >
      <div className={`${myStyles.vc_row} ${myStyles.usecase02}`}>
        <div>
          <div className={myStyles.usecase03}></div>
          <h1
            className={`text-center ${myStyles.usecase04} ${myStyles.usecase05}`}
          >
            {t("main.case.title")}
          </h1>

          <div className={myStyles.usecase04}>
            <p></p>
            <p className={myStyles.usecase06}>__</p>
            <p></p>
          </div>

          <div className={`container ${myStyles.usecaseCard}`}>
            <div className="row">
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
            </div>
            <div className="col-lg-6">
              <h2 className={myStyles.usecaseTitle}>{t("main.case.title1")}</h2>

              <p className={myStyles.usecaseDescription}>
                {t("main.case.description1")}
              </p>

              <Link
                id="submit"
                href="/bolt-trust"
                className={`btn btn-primary rounded-pill ${myStyles.usecaseLink}`}
              >
                {t("main.case.linkTitle")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UseCase;
