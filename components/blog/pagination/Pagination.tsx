import React from "react";
import style from "./pagination.module.css";
import Head from "next/head"; // Import the Head component from Next.js
import { useRouter } from "next/router";
const Pagination = ({ currentPage, totalPages, setCurrentPage }: any) => {
  
  const pageNumbers = [];
  const router = useRouter();
  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  const prevPageUrl = currentPage > 1 ? `/blogs/page/${currentPage - 1}` : null;
  const nextPageUrl = !isLastPage ? `/blogs/page/${currentPage + 1}` : null;


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

  return (
    <div>
      <Head>
        {prevPageUrl && <link rel="prev" href={prevPageUrl} />}
        {nextPageUrl && <link rel="next" href={nextPageUrl} />}
        <link rel="canonical" href={router.asPath} />
      </Head>
      <ul className={style.pagination_bg}>
        {currentPage - 1 >= 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>{"<"}</button>
        )}
        {startPage > 1 && <li onClick={() => setCurrentPage(1)}>1</li>}

        {startPage > 2 && (
          <li>
            <span>...</span>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${number === currentPage ? " Paginationactive" : ""}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </li>
        ))}

        {endPage < totalPages - 1 && (
          <li>
            <span>...</span>
          </li>
        )}

        {endPage < totalPages && (
          <li onClick={() => setCurrentPage(totalPages)}>{totalPages}</li>
        )}
        {currentPage + 1 <= totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>{">"}</button>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
