import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function WhyBoltchain() {
  const { t } = useTranslation("common");

  return (
    <div
      id="why"
      //name="why"
      data-section-title="main.hwy.title"
      className="page_content section_page-12"
    >
      <div className={`container-fluid ${myStyles.container_fluid}`}>
        <div
          data-rtl="false"
          data-row-effect-mobile-disable="true"
          className={`vc_row wpb_row vc_row-fluid ult-vc-hide-row vc_row-has-fill ${myStyles.style21}`}
        >
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-xs">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div
                  data-animate="infinite No Animation"
                  data-animation-delay="0"
                  data-animation-duration=""
                  data-animation-iteration="infinite"
                  className={`ult-animation  ult-no-mobile ${myStyles.style22}`}
                >
                  <div
                    data-id="5df992b78b38d"
                    data-height="120"
                    data-height-mobile="50"
                    data-height-tab=""
                    data-height-tab-portrait=""
                    data-height-mobile-landscape="80"
                    className={`ult-spacer spacer-5df992b78b38d animated infinite No Animation ${myStyles.style23}`}
                  ></div>
                  <div
                    id="ultimate-heading-86985df992b78b3ab"
                    data-hspacer="no_spacer"
                    data-halign="center"
                    className={`uvc-heading ult-adjust-bottom-margin ultimate-heading-86985df992b78b3ab uvc-8193  animated infinite No Animation ${myStyles.style24}`}
                  >
                    <div className={myStyles.style25}></div>
                    <h1 className={myStyles.style26}>{t("main.why.title")}</h1>
                    <div
                      data-ultimate-target=".uvc-heading.ultimate-heading-86985df992b78b3ab .uvc-sub-heading "
                      data-responsive-json-new="{font-size:,line-height:}"
                      className={`uvc-sub-heading ult-responsive ${myStyles.style27}`}
                    >
                      <p></p>
                      <p className={myStyles.style28}>__</p>
                      <p></p>
                    </div>
                  </div>
                  <div className={myStyles.style29}></div>
                  <div
                    className={`container ${styles.container} ${myStyles.container}`}
                  >
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
                                    <div
                                      className={`align-icon ${myStyles.align_icon}`}
                                    >
                                      <div
                                        data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        className={`aio-icon circle  animated fadeInUp delay-03 ${myStyles.align_icon_circle} ${myStyles.style30}`}
                                      >
                                        <i className="linearicons-power"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="aio-icon-header">
                                  <h3
                                    data-ultimate-target="#Info-box-wrap-1792 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    className={`aio-icon-title ult-responsive ${myStyles.aio_icon_title}`}
                                  >
                                    {t("main.why.title1")}
                                  </h3>
                                </div>
                                <div
                                  data-ultimate-target="#Info-box-wrap-1792 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
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
                                id="Info-box-wrap-5795"
                                className={`aio-icon-box top-icon ${myStyles.aio_icon_box}`}
                              >
                                <div className="aio-icon-top">
                                  <div className="ult-just-icon-wrapper  ">
                                    <div
                                      className={`align-icon ${myStyles.style12}`}
                                    >
                                      <div
                                        data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        className={`aio-icon circle  animated fadeInUp delay-03 ${myStyles.aio_icon_circle} ${myStyles.style30}`}
                                      >
                                        <i className="linearicons-server"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="aio-icon-header">
                                  <h3
                                    data-ultimate-target="#Info-box-wrap-5795 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    className={`aio-icon-title ult-responsive ${myStyles.aio_icon_title}`}
                                  >
                                    {t("main.why.title3")}
                                  </h3>
                                </div>
                                <div
                                  data-ultimate-target="#Info-box-wrap-5795 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
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
                                id="Info-box-wrap-4344"
                                className={`aio-icon-box top-icon ${myStyles.aio_icon_box}`}
                              >
                                <div className="aio-icon-top">
                                  <div className="ult-just-icon-wrapper  ">
                                    <div
                                      className={`align-icon ${myStyles.align_icon}`}
                                    >
                                      <div
                                        data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        className={`aio-icon circle  animated fadeInUp delay-03 ${myStyles.aio_icon_circle} ${myStyles.style30}`}
                                      >
                                        <i className="linearicons-cable2"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="aio-icon-header">
                                  <h3
                                    data-ultimate-target="#Info-box-wrap-4344 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    className={`aio-icon-title ult-responsive ${myStyles.aio_icon_title}`}
                                  >
                                    {t("main.why.title4")}
                                  </h3>
                                </div>
                                <div
                                  data-ultimate-target="#Info-box-wrap-4344 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
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
              </div>
            </div>
          </div>
        </div>
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
