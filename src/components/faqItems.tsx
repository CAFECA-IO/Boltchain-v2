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
    <div>
      <div onClick={toggle} className={iconStyle}>
        <h4>{props.que}</h4>
        <div className={answerStyle}>
          <p>{props.ans}</p>
        </div>
      </div>
      <span className={myStyles.hline}></span>
    </div>
  );
}
export default FAQItems;
