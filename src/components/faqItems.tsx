import myStyles from "../styles/faq.module.css";

import React, { useState } from "react";

function FAQItems(props: any) {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggle = () => setShowAnswer(!showAnswer);

  const answerStyle = showAnswer ? myStyles.ansOpen : myStyles.ansClose;
  const iconStyle = showAnswer
    ? myStyles.faq_item_minus
    : myStyles.faq_item_plus;

  return (
    <section className={myStyles.faq_block}>
      <div onClick={toggle} className={iconStyle}>
        <p className={myStyles.anstext}>{props.que}</p>
        <div className={answerStyle}>
          <p>{props.ans}</p>
        </div>
      </div>
    </section>
  );
}
export default FAQItems;
