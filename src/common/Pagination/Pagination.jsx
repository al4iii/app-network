import React from "react";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    if (pagesCount > 20) {
      pagesCount = 20;
    }
    pages.push(i);
  }
  return (
    <div className={styles.pagination}>
      {pages.map((p) => {
        return (
          <span
            key={p}
            onClick={(e) => props.onPageChenged(p)}
            className={props.currentPage === p && styles.selectedPage}
            className={styles.currentPage}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
