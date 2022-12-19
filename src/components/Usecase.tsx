import styles from "../styles/index.module.css";
import myStyles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

function UseCase() {
  const { t } = useTranslation("common");

  return (
    <div
      className={`container-fluid ${myStyles.container_fluid} ${myStyles.usecase01}`}
    >
      <div
        className={`vc_row wpb_row vc_row-fluid ult-vc-hide-row vc_row-has-fill ${myStyles.usecase02}`}
      >
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
          <div className="vc_column-inner ">
            <div className={myStyles.usecase03}></div>
            <div className="uvc-main-heading ult-responsive text-center">
              <h1 className={`${myStyles.usecase04} ${myStyles.usecase05}`}>
                {t("main.case.title")}
              </h1>
            </div>
            <div
              className={`uvc-sub-heading ult-responsive ${myStyles.usecase04}`}
            >
              <p></p>
              <p className={myStyles.usecase06}>__</p>
              <p></p>
            </div>
            <div className="wpb_wrapper">
              <div className={`container ${myStyles.container}`}>
                <div className="row">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_single_image wpb_content_element vc_align_left">
                        <figure className="wpb_wrapper vc_figure">
                          <a
                            href={`${t("main.news.post1.link")}`}
                            className="vc_single_image-wrapper vc_box_border_grey"
                          >
                            <Image
                              src={`${t("main.news.post1.image")}`}
                              alt=""
                              width={360}
                              height={270}
                              className={`vc_single_image-img attachment-full ${myStyles.usecaseImg}`}
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <h2
                        className={`vc_custom_heading ${myStyles.usecaseTitle}`}
                      >
                        {t("main.case.title1")}
                      </h2>
                      <div className="wpb_text_column wpb_content_element ">
                        <div className="wpb_wrapper">
                          <p className={myStyles.usecaseDescription}>
                            {t("main.case.description1")}
                          </p>
                        </div>
                      </div>
                      <div className={myStyles.usecase07}></div>
                      <a
                        id="submit"
                        target="_self"
                        href="/bolt-trust"
                        className={`btn btn-primary rounded-pill ${myStyles.usecaseLink}`}
                      >
                        {t("main.case.linkTitle")}
                      </a>
                    </div>
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
export default UseCase;
