import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://img.icons8.com/bubbles/2x/user-male.png",
        fullName: "al4i",
        followed: true,
        status: "i like sex",
        location: { city: "Mogilev", contry: " Belarus" },
      },
      {
        id: 2,
        photoUrl: "https://img.icons8.com/bubbles/2x/user-male.png",
        fullName: "sasha",
        followed: false,
        status: "i like cola",
        location: { city: "Minsk", contry: " Belarus" },
      },
      {
        id: 3,
        photoUrl: "https://img.icons8.com/bubbles/2x/user-male.png",
        fullName: "gora",
        followed: true,
        status: "i like study",
        location: { city: "Gomel", contry: " Belarus" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="foto" className={style.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div> {u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div> {u.location.contry}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
