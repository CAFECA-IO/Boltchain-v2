import styles from "../styles/index.module.css";
import myStyles from "../styles/technology.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

const contents = [3, 4, 5, 6, 7, 8, 9, 10];

function TechnologyPage() {
  const { t } = useTranslation("common");

  const tbody = contents.map((v) => {
    return (
      <tr>
        <th>{t(`technology.block1.table.A${v}`)}</th>
        <td>{t(`technology.block1.table.B${v}`)}</td>
        <td>{t(`technology.block1.table.C${v}`)}</td>
        <td>{t(`technology.block1.table.D${v}`)}</td>
        <td>{t(`technology.block1.table.E${v}`)}</td>
      </tr>
    );
  });

  return (
    <>
      <div className={styles.fullwidth_container}>
        <div className={styles.header_container}>
          <h1 className={styles.page_title}>{t("technology.title")}</h1>
        </div>

        <div className={styles.master_container}>
          <div className={styles.page_content}>
            <div className={myStyles.technology_block}>
              <h3>{t("technology.block1.title")}</h3>
              <p className={styles.line}>__</p>

              <table className={myStyles.technology_table}>
                <thead>
                  <tr>
                    <th rowSpan={2}></th>
                    <th colSpan={2}>{t("technology.block1.table.B1")}</th>
                    <th>{t("technology.block1.table.C1")}</th>
                    <th>{t("technology.block1.table.D1")}</th>
                  </tr>
                  <tr>
                    <th>{t("technology.block1.table.B2")}</th>
                    <th>{t("technology.block1.table.C2")}</th>
                    <th>{t("technology.block1.table.D2")}</th>
                    <th>{t("technology.block1.table.E2")}</th>
                  </tr>
                </thead>
                <tbody>{tbody}</tbody>
              </table>
            </div>

            <span className={myStyles.technology_vline}></span>

            <div className={myStyles.technology_block}>
              <div className={myStyles.card}>
                <div className={myStyles.textbox}>
                  <h3>{t("technology.block2.title")}</h3>
                  <p>{t("technology.block2.description")}</p>
                </div>

                <Image
                  src={`${t("technology.block2.image")}`}
                  alt=""
                  width={500}
                  height={365}
                  className={myStyles.imgbox}
                />
              </div>

              <div className={myStyles.card}>
                <div className={myStyles.textbox}>
                  <h3>{t("technology.block3.title")}</h3>
                  <p>{t("technology.block3.description")}</p>
                </div>
                <Image
                  src={`${t("technology.block3.image")}`}
                  alt=""
                  width={500}
                  height={365}
                  className={myStyles.imgbox}
                />
              </div>

              <div className={myStyles.card}>
                <div className={myStyles.textbox}>
                  <h3>{t("technology.block4.title")}</h3>
                  <p>{t("technology.block4.description")}</p>
                  <h4>{t("technology.block4.subtitle")}</h4>
                  <p>{t("technology.block4.description2")}</p>
                </div>

                <Image
                  src={`${t("technology.block4.image")}`}
                  alt=""
                  width={500}
                  height={365}
                  className={myStyles.imgbox}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TechnologyPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
