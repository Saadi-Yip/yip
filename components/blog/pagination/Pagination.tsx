import React from "react";
import style from "./pagination.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

const Pagination = ({ currentPage, totalPages, setCurrentPage }:any) => {
  const pageNumbers:any = [];
  const router = useRouter();
  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  const prevPageUrl = currentPage > 1 ? `/blogs/page/${currentPage - 1}` : null;
  const nextPageUrl = !isLastPage ? `/blogs/page/${currentPage + 1}` : null;

  let startPage = currentPage > 3 ? currentPage - 2 : 1;
  let endPage = currentPage + 2;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - 4 > 1 ? endPage - 4 : 1;
  }

  const handlePrevPageClick = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Head>
        {prevPageUrl && <link rel="prev" href={prevPageUrl} />}
        {nextPageUrl && <link rel="next" href={nextPageUrl} />}
        <link rel="canonical" href={router.asPath} />
      </Head>
      <ul className={style.pagination_bg}>
        <button onClick={handlePrevPageClick} disabled={isFirstPage}>
          {"<"}
        </button>

        {startPage > 1 && <li onClick={() => setCurrentPage(1)}>1</li>}

        {startPage > 2 && <li><span>...</span></li>}

        {pageNumbers.map((number:any) => (
          <li
            key={number}
            className={`${number === currentPage ? style.Paginationactive : ""}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </li>
        ))}

        {endPage < totalPages - 1 && <li><span>...</span></li>}

        {endPage < totalPages && (
          <li onClick={() => setCurrentPage(totalPages)}>{totalPages}</li>
        )}
        <button onClick={handleNextPageClick} disabled={isLastPage}>
          {">"}
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
