import React, { useState } from "react";
import styles from "./Pagination.module.css";
import cn from "classnames";

type PropsType = {
  totalItemsCount: number;
  pageSize: number;
  onPageChenged: (pageNumber: number) => void;
  currentPage: number;
  portionSize?: number; 
};

const Pagination: React.FC<PropsType> = ({ totalItemsCount, pageSize, onPageChenged, currentPage, portionSize = 10,}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setportionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;   
  return (
    <div className={styles.pagination}>
    {portionNumber > 1 && (
      <button onClick={() => {setportionNumber(portionNumber - 1)}} className={styles.button}>
        PREV
      </button> )}
    {pages
      .filter( (p) => p >= leftPortionNumber && p <= rightPortionPageNumber)
      .map((p) => { return (
          <span className={cn({[styles.selectedPage]: currentPage === p,}, styles.pageNumber)}
            key={p} onClick={() => {onPageChenged(p)}} >
            {p}
          </span>
        );
      })}
    {portionCount > portionNumber && (
      <button onClick={() => { setportionNumber(portionNumber + 1) }} className={styles.button}>
        NEXT 
      </button>
    )}
  </div>
  );
};

export default Pagination;
