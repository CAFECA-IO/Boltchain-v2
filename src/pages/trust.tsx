import styles from "../styles/index.module.css";
import myStyles from "../styles/trust.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

function TrustPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.fullwidth_container}>
        <div className={styles.header_container}>
          <h1 className={styles.page_title}>{t("trust.title")}</h1>
        </div>

        <div className={styles.master_container}>
          <div className={styles.page_content}>
            <div className={myStyles.trust_block}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrustPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
