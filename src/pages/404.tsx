import styles from "../styles/index.module.css";
import myStyles from "../styles/notfound.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "react-bootstrap";

function NotFoundPage() {
  return (
    <div className={`container-fluid ${myStyles.container_fluid}`}>
      <div className={myStyles.layout}></div>
      <div className={myStyles.container}>
        <div className={myStyles.not_found_jumbotron}>
          <img src="/img/error.png" className={myStyles.not_found_img} />
          <h1 className={myStyles.not_found_title}>
            Oops! There is nothing here...
          </h1>
          <h4 className={myStyles.not_found_description}>
            It seems we can't find what you're looking for. Perhaps searching
            one of the links in the above menu, can help.
          </h4>
          <Button className="btn btn-primary rounded-pill" id="submit" href="/">
            GO TO HOMEPAGE
          </Button>
        </div>
      </div>
    </div>
  );
}
export default NotFoundPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
