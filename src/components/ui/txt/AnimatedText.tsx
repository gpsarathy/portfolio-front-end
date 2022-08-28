import * as React from "react";
import Typist from "react-typist-component";
import Styles from "./Styles.module.css";

export default () => {
  return (
    <h2 className="font-['Courier_New']">
      <Typist
        typingDelay={150}
        cursor={<span className={Styles.blink}>&#9610;</span>}
      >
        Hello World!
        <br />
        <Typist.Delay ms={1500} />
        <Typist.Backspace count={7} />
        <Typist.Delay ms={1500} />! I'm Parthasarathy&nbsp;
      </Typist>
    </h2>
  );
};
