import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../img/user-male.png";

class Users extends React.Component {
  onPageChenged = (pageNumber) => {
    this.props.setCurrentPages(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
      if (pagesCount > 20) {
        pagesCount = 20;
      }
      pages.push(i);
    }

    return (
      <div>
        <div className={styles.pagination}>
          {pages.map((p) => {
            return (
              <span
                onClick={(e) => this.onPageChenged(p)}
                className={this.props.currentPage === p && styles.selectedPage}
              >
                {p}
              </span>
            );
          })}
        </div>
        <div className={styles.users}>
          {this.props.users.map((u) => (
            <div key={u.id} className={styles.user}>
              <span>
                <div className={styles.userPhoto}>
                  <img
                    className={styles.user_img}
                    src={u.photos.small || avatar}
                    alt="foto"
                  />
                </div>
                <div className={styles.button}>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(u.id);
                      }}
                    >
                      follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
                      }}
                    >
                      unfollow
                    </button>
                  )}
                </div>
              </span>
              <span className={styles.user_info}>
                <div className={styles.item_info}>Name: {u.name}</div>
                <div className={styles.item_info}>
                  {u.status || "no status"}
                </div>
                <div className={styles.item_info}> id : {u.id}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
