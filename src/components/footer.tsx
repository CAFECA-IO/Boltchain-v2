import Image from "next/image";
import styles from "./../styles/footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerBar}>
        <Image
          className={styles.footerlogo}
          src="/img/2019/05/bolt_logo_7.png"
          alt="logo"
          width={150}
          height={36}
        />
        <hr></hr>
        <p>
          <span>Copyright © TideiSun. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
