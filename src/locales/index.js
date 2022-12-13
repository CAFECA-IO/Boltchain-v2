import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["lang"])),
      // Will be passed to the page component as props
    },
  };
}

/* 
// 自訂語言檔
import en from "./en/lang";
import tw from "./tw/lang";

const locale = localStorage.getItem('locale') || 'tw'

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale, // set locale
  messages: {en, tw}
})

export default i18n */
