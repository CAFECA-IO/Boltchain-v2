import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function WhyBoltchain() {
  const { t } = useTranslation("common");

  return (
    <div className={`ult-animation  ult-no-mobile ${myStyles.style22}`}>
      <div
        className={`ult-spacer spacer-5df992b78b38d animated infinite No Animation ${myStyles.style23}`}
      ></div>
      <div
        id="ultimate-heading-86985df992b78b3ab"
        className={`uvc-heading ult-adjust-bottom-margin ultimate-heading-86985df992b78b3ab uvc-8193  animated infinite No Animation ${myStyles.style24}`}
      >
        <div className={myStyles.style25}></div>
        <h1 className={myStyles.style26}>{t("main.why.title")}</h1>
        <div className={`uvc-sub-heading ult-responsive ${myStyles.style27}`}>
          <p></p>
          <p className={myStyles.style28}>__</p>
          <p></p>
        </div>
      </div>
      <div className={myStyles.style29}></div>
      <div className={`container ${styles.container} ${myStyles.container}`}>
        <div className={`row ${myStyles.row}`}>
          <div className="col-lg-4">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="aio-icon-component  vc_custom_1556258300978   style_1 upper_icon_index-0">
                  <div
                    id="Info-box-wrap-1792"
                    className={`aio-icon-box top-icon ${myStyles.aio_icon_box}`}
                  >
                    <div className="aio-icon-top">
                      <div className="ult-just-icon-wrapper  ">
                        <div className={`align-icon ${myStyles.align_icon}`}>
                          <div
                            className={`aio-icon circle  animated fadeInUp delay-03 ${myStyles.align_icon_circle} ${myStyles.style30}`}
                          >
                            <i className="linearicons-power"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="aio-icon-header">
                      <h3
                        className={`aio-icon-title ult-responsive ${myStyles.aio_icon_title}`}
                      >
                        {t("main.why.title1")}
                      </h3>
                    </div>
                    <div
                      className={`aio-icon-description ult-responsive ${myStyles.aio_icon_description}`}
                    >
                      {t("main.why.description1")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="aio-icon-component  vc_custom_1567392482070   style_1 upper_icon_index-0">
                  <div
                    className={`aio-icon-box top-icon ${myStyles.aio_icon_box}`}
                  >
                    <div className="aio-icon-top">
                      <div className="ult-just-icon-wrapper  ">
                        <div className={`align-icon ${myStyles.style12}`}>
                          <div
                            className={`aio-icon circle  animated fadeInUp delay-03 ${myStyles.aio_icon_circle} ${myStyles.style30}`}
                          >
                            <i className="linearicons-server"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="aio-icon-header">
                      <h3
                        className={`aio-icon-title ult-responsive ${myStyles.aio_icon_title}`}
                      >
                        {t("main.why.title3")}
                      </h3>
                    </div>
                    <div
                      className={`aio-icon-description ult-responsive ${myStyles.aio_icon_description}`}
                    >
                      {t("main.why.description3")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="aio-icon-component  vc_custom_1567392947659   style_1 upper_icon_index-0">
                  <div
                    className={`aio-icon-box top-icon ${myStyles.aio_icon_box}`}
                  >
                    <div className="aio-icon-top">
                      <div className="ult-just-icon-wrapper  ">
                        <div className={`align-icon ${myStyles.align_icon}`}>
                          <div
                            className={`aio-icon circle  animated fadeInUp delay-03 ${myStyles.aio_icon_circle} ${myStyles.style30}`}
                          >
                            <i className="linearicons-cable2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="aio-icon-header">
                      <h3
                        className={`aio-icon-title ult-responsive ${myStyles.aio_icon_title}`}
                      >
                        {t("main.why.title4")}
                      </h3>
                    </div>
                    <div
                      className={`aio-icon-description ult-responsive ${myStyles.aio_icon_description}`}
                    >
                      {t("main.why.description4")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={myStyles.styles}></div>
      </div>
    </div>
  );
}
export default WhyBoltchain;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
