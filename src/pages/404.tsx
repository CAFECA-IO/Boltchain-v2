import myStyles from "../styles/notfound.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Link from "next/link";
import Image from "next/image";

function NotFoundPage() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.container_fluid}>
      <div className={myStyles.container}>
        <div className={myStyles.not_found_jumbotron}>
          <Image
            src="/img/error.png"
            alt="not_found_image"
            width={90}
            height={90}
            className={myStyles.not_found_img}
          />
          <h1 className={myStyles.not_found_title}>{t("notFound.title")}</h1>
          <h4 className={myStyles.not_found_description}>
            {t("notFound.description")}
          </h4>

          <Link href="/" className={myStyles.submit}>
            {t("notFound.backhome")}
          </Link>
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
