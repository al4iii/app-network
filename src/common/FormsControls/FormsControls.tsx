import React from "react";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../helpers/validators/validators";
import styles from "./FormsControls.module.css";

type FormControlProrsType = {
  meta: WrappedFieldMetaProps;
};

const FormControl:React.FC<FormControlProrsType>  = ({ meta: { touched, error }, children}) => {
  const hasError = touched && error;
  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta,  ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  ); 
};

export const Input: React.FC<WrappedFieldProps>  = (props) => {
  const { input, meta,  ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export function createField<FormkeysType extends string>( placeholder: string  | undefined, name: FormkeysType ,
   validate: Array<FieldValidatorType>, component:  React.FC<WrappedFieldProps>, type = "", props={}) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validate}
        component={component}
        type={type}
        {...props}
      />
    </div>
  );
};
