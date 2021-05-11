import React from "react";
import { Field, Form, Formik } from "formik";
import { FilterType } from "../../redux/users-reduser";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../redux/users-selector";
import styles from "./Users.module.css";

const userFormValitate = () => {
  const errors = {};
  return errors;
};
type PropsType = {
  onFilterChanged: (filter: FilterType) => void;
};
type FriendTFormype = "true" | "false" | "null"
type FormType = {
 term: string
 friend: FriendTFormype
};
const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
  const filter = useSelector(getUsersFilter)
  const submit = ( values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const filter:FilterType  = {
      term: values.term,
      friend: values.friend ==="null" ? null: values.friend ==="true" ? true :  false
     }
    props.onFilterChanged(filter);
    setSubmitting(false);
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ term: filter.term, friend: String(filter.friend) as FriendTFormype}}
      validate={userFormValitate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Field type="text" name="term" />
          <Field name="friend" as="select">
            <option value="null">all </option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  );
});

export default UsersSearchForm;
