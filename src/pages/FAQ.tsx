import styles from "../styles/index.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import FAQItems from "../components/faqItems";

const contents = [1, 2, 3, 4, 5, 6];

function FAQPage() {
  const { t } = useTranslation("common");

  const list = contents.map((v) => {
    return (
      <FAQItems
        key={t(`faq.question${v}`)}
        que={t(`faq.question${v}`)}
        ans={t(`faq.answer${v}`)}
      />
    );
  });

  return (
    <div>
      <div className={styles.fullwidth_container}>
        <div className={styles.header_container}>
          <h1 className={styles.page_title}>{t("faq.title")}</h1>
        </div>

        <div className={styles.master_container}>
          <div className={styles.page_content}>{list}</div>
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
