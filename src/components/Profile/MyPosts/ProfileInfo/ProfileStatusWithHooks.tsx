import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  props.getStatus(props.userId);
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => { setStatus(props.status) }, [props.status]);
  const activateMode = () => setEditMode(true);
  const deactivateMode = () => { setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChenge = (e) => setStatus(e.currentTarget.value);
  return (
    <div  className={styles.status}>
      {!editMode && (
        <div className={styles.status}>
          <span className={styles.profile_span}>
            Status: {status || "no status"}
          </span>
          <button onClick={activateMode} className={styles.button_status}>
            update status
          </button>
        </div>
      )}
      {editMode && (
        <div className={styles.status}>
          <input autoFocus={true} value={status} onChange={onStatusChenge} />
          <button className={styles.button_status} onClick={deactivateMode}>
            save
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
