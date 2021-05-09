import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../../../redux/profile-selector";
import styles from "./ProfileInfo.module.css";

type PropsType ={
  getStatus: (userId:number)=> void
  userId: number
  status: string
  updateStatus: (status:string)=> void
}
const ProfileStatusWithHooks:React.FC<PropsType> = ({getStatus,userId,updateStatus}) => {
  getStatus(userId);
  const statusToRedux = useSelector(selectStatus)    
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(statusToRedux);
  useEffect(() => { setStatus(statusToRedux) }, [statusToRedux]); 
  const activateMode = () => setEditMode(true);
  const deactivateMode = () => { setEditMode(false);
    updateStatus(status);
  };
  const onStatusChenge = (e: ChangeEvent<HTMLInputElement> ) => setStatus(e.currentTarget.value);
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