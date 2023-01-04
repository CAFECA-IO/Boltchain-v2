import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import WhyBoltchain from "../components/why";
import UseCase from "../components/usecase";
import ContactUsForm from "../components/contactform";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.fullwidth_container}>
        <div className={myStyles.container_center}>
          <div className={myStyles.pageTitle}>
            <img
              src="/img/main/bolt_logo_7.png"
              alt="Boltchain_logo_white"
              className={myStyles.slide1_logo}
            />
            <h1 className={styles.page_title}>{t("main.title")}</h1>
            <h1 className={myStyles.subtitle}>{t("main.description")}</h1>
            <img
              src="/img/main/scroll_down_icon.gif"
              alt=""
              className={myStyles.ls_layer}
            />
          </div>
        </div>
      </div>
      <div id="about">
        <div className={`${styles.container} ${myStyles.container}`}>
          <div className={myStyles.vc_row}>
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className={myStyles.style11}></div>
                  <div
                    className={`uvc-heading ult-adjust-bottom-margin ultimate-heading-36475df992b78ad75 uvc-8158 ${myStyles.style12}`}
                  >
                    <div className="uvc-heading-spacer no_spacer"></div>
                    <div className="uvc-main-heading ult-responsive">
                      <h1 className={myStyles.style13}>
                        {t("main.about.title")}
                      </h1>
                    </div>
                    <div
                      data-ultimate-target=".uvc-heading.ultimate-heading-36475df992b78ad75 .uvc-sub-heading "
                      data-responsive-json-new="{font-size:,line-height:}"
                      className={`uvc-sub-heading ult-responsive ${myStyles.style14}`}
                    >
                      <p className={myStyles.style15}>__</p>
                    </div>
                  </div>
                  <div
                    data-id="5df992b78ad9b"
                    data-height="20"
                    data-height-mobile="20"
                    data-height-tab="20"
                    data-height-tab-portrait=""
                    data-height-mobile-landscape=""
                    className={`ult-spacer spacer-5df992b78ad9b ${myStyles.style16}`}
                  ></div>
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <p className={myStyles.style17}>
                        {t("main.about.description")}
                      </p>
                    </div>
                  </div>
                  <div className={myStyles.style11}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="why" className={` ${myStyles.container_fluid}`}>
        <WhyBoltchain />
      </div>

      <div
        id="case"
        className={` ${myStyles.container_fluid} ${myStyles.usecase01}`}
      >
        <UseCase />
      </div>

      <div id="news"></div>

      <div id="contact">
        <ContactUsForm />
      </div>
    </>
  );
}
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
