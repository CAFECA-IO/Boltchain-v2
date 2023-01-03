import styles from "../styles/index.module.css";
import myStyles from "../styles/currency_trust.module.css";
import ContactUsForm from "../components/contactform";

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

              <div className={myStyles.trust_intro}>
                <div className={myStyles.intro_ticket}>
                  <Image
                    src={`${t("trust.block2.image1")}`}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <h3>{t("trust.block2.subtitle1")}</h3>
                  <p>{t("trust.block2.description1")}</p>
                </div>

                <div className={myStyles.intro_ticket}>
                  <Image
                    src={`${t("trust.block2.image2")}`}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <h3>{t("trust.block2.subtitle2")}</h3>
                  <p>{t("trust.block2.description2")}</p>
                </div>

                <div className={myStyles.intro_ticket}>
                  <Image
                    src={`${t("trust.block2.image3")}`}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <h3>{t("trust.block2.subtitle3")}</h3>
                  <p>{t("trust.block2.description3")}</p>
                </div>
              </div>
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
                />
                <div className={myStyles.steptext}>
                  <h4>{t("trust.block5.subtitle")}</h4>
                  <ul>
                    <li>{t("trust.block5.li1")}</li>
                    <li>{t("trust.block5.li2")}</li>
                    <li>{t("trust.block5.li3")}</li>
                    <li>{t("trust.block5.li4")}</li>
                    <li>{t("trust.block5.li5")}</li>
                  </ul>
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
