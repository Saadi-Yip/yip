import React from "react";
import style from "./pagination.module.css";
import { useRouter } from 'next/router'; // Import useRouter from Next.js

const Pagination = ({ currentPage, totalPages, setCurrentPage }: any) => {
  const pageNumbers = [];

  // Calculate the range of page numbers to display
  let startPage = currentPage > 3 ? currentPage - 2 : 1;
  let endPage = currentPage + 2;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - 4 > 1 ? endPage - 4 : 1;
  }

  // Generate the array of page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const router = useRouter(); // Access the router object

  const handlePageChange = (pageNumber:any) => {
    console.log(pageNumber); 
    setCurrentPage(pageNumber);
    router.push(`/blog?page=${pageNumber}`);
  };


  return (
    <ul className={style.pagination_bg}>
      {/* Previous page button */}
      {currentPage - 1 >= 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>{"<"}</button>
      )}

      {/* First page */}
      {startPage > 1 && <li onClick={() => handlePageChange(1)}>1</li>}

      {/* Ellipsis for pages */}
      {startPage > 2 && (
        <li>
          <span>...</span>
        </li>
      )}

      {/* Page numbers */}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`${number === currentPage ? " Paginationactive" : ""}`}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </li>
      ))}

      {/* Ellipsis for pages */}
      {endPage < totalPages - 1 && (
        <li>
          <span>...</span>
        </li>
      )}

      {/* Last page */}
      {endPage < totalPages && (
        <li onClick={() => handlePageChange(totalPages)}>{totalPages}</li>
      )}

      {/* Next page button */}
      {currentPage + 1 <= totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>{">"}</button>
      )}
    </ul>
  );
};


export default Pagination;
