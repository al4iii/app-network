import React from "react";
import styles from "./Button.module.css";

type PropsType={
  onClick: ()=> void
  text: string
}
const Button:React.FC<PropsType> = (props) => {
  return (
    <div>
      <button className={styles.button} onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default Button;
