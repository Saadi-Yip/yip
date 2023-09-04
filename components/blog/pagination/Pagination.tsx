import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({ items, pageSize, currentPage, onPageChange }:any) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10
 
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  
 
  return (
    <div>
     <ul className={styles.pagination}>
       {pages.map((page) => (
         <li
           key={page}
           className={
             page === currentPage ? styles.pageItemActive : styles.pageItem
           }
         >
           <a className={styles.pageLink} onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
     </ul>
   </div>
  );
 };
 
 export default Pagination;


 export const paginate = (items:any, pageNumber:any, pageSize:any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
 };