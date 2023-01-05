import styles from "../styles/index.module.css";
import myStyles from "../styles/currency_trust.module.css";
import ContactUsForm from "../components/contactform";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

function TrustPage() {
  const { t } = useTranslation("common");

  //block2
  const contents = [1, 2, 3];
  const introItem = contents.map((v) => {
    return (
      <div className={myStyles.intro_ticket}>
        <Image
          src={t(`trust.block2.image${v}`) || ""}
          alt=""
          width={80}
          height={80}
        />
        <h3>{t(`trust.block2.subtitle${v}`)}</h3>
        <p>{t(`trust.block2.description${v}`)}</p>
      </div>
    );
  });

  //block5 steps
  const steps = [1, 2, 3, 4, 5];
  const stepItem = steps.map((v) => {
    return <li>{t(`trust.block5.li${v}`)}</li>;
  });

  return (
    <>
      <div className={styles.fullwidth_container}>
        <div className={styles.header_container}>
          <h1 className={styles.page_title}>{t("trust.title")}</h1>
        </div>

        <div className={styles.master_container}>
          <div className={styles.page_content}>
            <div className={myStyles.trust_block}>
              <figure className={myStyles.titlelogo}>
                <Image
                  width={300}
                  height={61}
                  src={`${t("trust.block1.image1")}`}
                  alt=""
                />
                <p className={styles.line}>__</p>
              </figure>
              <h3>{t("trust.block1.title")}</h3>
              <div className={myStyles.layout}></div>
              <Image
                width={900}
                height={380}
                src={`${t("trust.block1.image2")}`}
                alt=""
                className={myStyles.imagebox}
              />
            </div>

            <div className={myStyles.trust_block}>
              <h3>{t("trust.block2.title")}</h3>
              <p>__</p>

              <div className={myStyles.trust_intro}>{introItem}</div>
            </div>

            <div className={myStyles.trust_block}>
              <h3>{t("trust.block3.title")}</h3>
              <p className={styles.line}>__</p>
              <Image
                src={`${t("trust.block3.image")}`}
                alt=""
                width={1000}
                height={500}
                className={myStyles.imagebox}
              />
            </div>

            <div className={myStyles.vline}></div>

            <div className={myStyles.trust_block}>
              <h3>{t("trust.block4.title")}</h3>
              <p className={styles.line}>__</p>
              <Image
                src={`${t("trust.block4.image")}`}
                alt=""
                width={1000}
                height={600}
                className={myStyles.imagebox}
              />
            </div>

            <div className={myStyles.vline}></div>

            <div className={myStyles.trust_block}>
              <h3>{t("trust.block5.title")}</h3>
              <p className={styles.line}>__</p>
              <div className={myStyles.stepbox}>
                <Image
                  src={`${t("trust.block5.image")}`}
                  alt=""
                  width={400}
                  height={400}
                  className={myStyles.stepimg}
                />
                <div className={myStyles.steptext}>
                  <h4>{t("trust.block5.subtitle")}</h4>
                  <ul>{stepItem}</ul>
                </div>
              </div>
            </div>

            <div>
              <ContactUsForm />
            </div>
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
