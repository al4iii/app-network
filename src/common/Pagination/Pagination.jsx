import React from "react";
import styles from "./Pagination.module.css";
import cn from "class-names"

const Pagination = ({ totalUsersCount,pageSize,onPageChenged,currentPage }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
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
            onClick={() => onPageChenged(p)}            
            className={cn(currentPage === p && styles.selectedPage,styles.currentPage )}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
