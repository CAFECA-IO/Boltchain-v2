import myStyles from "../styles/notfound.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Link from "next/link";

function NotFoundPage() {
  const { t } = useTranslation("common");

  return (
    <div className={`container-fluid ${myStyles.container_fluid}`}>
      <div className={myStyles.layout}></div>
      <div className={myStyles.container}>
        <div className={myStyles.not_found_jumbotron}>
          <img src="/img/error.png" className={myStyles.not_found_img} />
          <h1 className={myStyles.not_found_title}>{t("notFound.title")}</h1>
          <h4 className={myStyles.not_found_description}>
            {t("notFound.description")}
          </h4>
          <button className="btn btn-primary rounded-pill" id={myStyles.submit}>
            <Link href="/" className={myStyles.link}>
              {t("notFound.backhome")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default NotFoundPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
