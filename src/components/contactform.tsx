import myStyles from "../styles/form.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMediumM } from "@fortawesome/free-brands-svg-icons";

import { useTranslation } from "next-i18next";

function ContactUsForm(props: any) {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.form_main}>
      <div className={myStyles.form_title}>
        <h3>{t("main.contact.title")}</h3>
        <p>__</p>
      </div>

      <div className={myStyles.form_content}>
        <div className={myStyles.contact_area}>
          <h1>{t("main.contact.contactTitle")}</h1>
          <p>{t("main.contact.address")}</p>
          <p>{t("main.contact.phone")}</p>
          <p>{t("main.contact.email")}</p>

          <span className={myStyles.contact_line}></span>

          <div className={myStyles.linkbar}>
            <a
              className={myStyles.linkicon}
              href={`${t("main.contact.link.facebook")}`}
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className={myStyles.brandicon}
              />
            </a>
            <a
              className={myStyles.linkicon}
              href={`${t("main.contact.link.github")}`}
            >
              <FontAwesomeIcon icon={faGithub} className={myStyles.brandicon} />
            </a>
            <a
              className={myStyles.linkicon}
              href={`${t("main.contact.link.medium")}`}
            >
              <FontAwesomeIcon
                icon={faMediumM}
                className={myStyles.brandicon}
              />
            </a>
          </div>
        </div>

        <div className={myStyles.form_area}>
          <p>{t("main.contact.form.info")}</p>
          <form>
            <input
              id="your-name"
              type="text"
              placeholder={`${t("main.contact.form.name")}`}
              className={myStyles.inputbox}
              required
            ></input>

            <input
              id="your-phone"
              type="text"
              placeholder={`${t("main.contact.form.phone")}`}
              className={myStyles.inputbox}
              required
            ></input>

            <input
              id="your-email"
              type="text"
              placeholder={`${t("main.contact.form.email")}`}
              className={myStyles.inputbox}
              required
            ></input>

            <textarea
              id="your-message"
              placeholder={`${t("main.contact.form.message")}`}
              rows={10}
              wrap="soft"
              className={myStyles.textarea}
              required
            ></textarea>

            <button type="submit" className={myStyles.submit}>
              {t("main.contact.form.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ContactUsForm;
