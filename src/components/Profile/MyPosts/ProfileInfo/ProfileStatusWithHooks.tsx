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
  const status1 = useSelector(selectStatus)
  console.log(status1)
  getStatus(userId);
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(status1);
  useEffect(() => { setStatus(status1) }, [status1]); 
  const activateMode = () => setEditMode(true);
  const deactivateMode = () => { setEditMode(false);
    updateStatus(status1);
  };
  const onStatusChenge = (e: ChangeEvent<HTMLInputElement> ) => setStatus(e.currentTarget.value);
  return (
    <div  className={styles.status}>
      {!editMode && (
        <div className={styles.status}>
          <span className={styles.profile_span}>
            Status: {status1 || "no status"}
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