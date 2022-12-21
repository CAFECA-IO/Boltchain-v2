import styles from "../styles/index.module.css";
import myStyles from "../styles/faq.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import FAQItems from "../components/faqItems";

function FAQPage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className={styles.fullwidth_container}>
        <div className={myStyles.container}>
          <h1 className={myStyles.page_title}>{t("faq.title")}</h1>
        </div>

        <div className={myStyles.master_container}>
          <section className={myStyles.page_content}>
            <FAQItems
              key={t("faq.question1")}
              que={t("faq.question1")}
              ans={t("faq.answer1")}
            />
            <span className={myStyles.hline}></span>
            <FAQItems
              key={t("faq.question2")}
              que={t("faq.question2")}
              ans={t("faq.answer2")}
            />
            <span className={myStyles.hline}></span>
          </section>
        </div>
      </div>
    </div>
  );
}
export default FAQPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
