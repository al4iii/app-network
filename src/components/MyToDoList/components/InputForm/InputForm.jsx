import React from "react";
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  return (
    <div className={styles.input_form}>
      <form onSubmit={props.onSubmit} id="myForm" className={styles.formik}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add to-do"
          onChange={props.onChange}
        />
        <button className={styles.add}>+add</button>
      </form>
    </div>
  );
};

export default InputForm;
