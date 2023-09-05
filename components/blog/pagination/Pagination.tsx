import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "./pagination.module.css";
import Head from "next/head";

const Pagination = ({ currentPage, totalPages, setCurrentPage }: any) => {
  const router = useRouter();

  const handlePageClick = (pageNumber: any) => {
    const queryParams = { ...router.query };
    queryParams.page = pageNumber;

    router.push({
      pathname: "/blog",
      query: queryParams,
    });

    setCurrentPage(pageNumber);
  };

  let startPage = currentPage > 3 ? currentPage - 2 : 1;
  let endPage = currentPage + 2;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - 4 > 1 ? endPage - 4 : 1;
  }

  const pageNumbers = []; // Create an array to hold the page numbers

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i); // Add page numbers within the range to the array
  }

  return (
    <>
      <Head>
        <link rel="canonical" href={`/blog?page=${currentPage}`} />
        {currentPage > 1 && (
          <link rel="prev" href={`/blog?page=${currentPage - 1}`} />
        )}
        {currentPage < totalPages && (
          <link rel="next" href={`/blog?page=${currentPage + 1}`} />
        )}
      </Head>

      <ul className={style.pagination_bg}>
        {currentPage > 1 && (
          <li onClick={() => handlePageClick(currentPage - 1)}>
            <Link href={`/blog?page=${currentPage - 1}`}>
              {"<"}
            </Link>
          </li>
        )}
        {startPage > 1 && (
          <li onClick={() => handlePageClick(1)}>
            <a>1</a>
          </li>
        )}

        {startPage > 2 && (
          <li>
            <span>...</span>
          </li>
        )}

        {pageNumbers.map((number: any) => (
          <li
            key={number}
            className={`${number === currentPage ? "Paginationactive" : ""}`}
            onClick={() => handlePageClick(number)}
          >
            <a>{number}</a>
          </li>
        ))}

        {endPage < totalPages - 1 && (
          <li>
            <span>...</span>
          </li>
        )}

        {endPage < totalPages && (
          <li onClick={() => handlePageClick(totalPages)}>
            <a>{totalPages}</a>
          </li>
        )}
        {currentPage < totalPages && (
          <li onClick={() => handlePageClick(currentPage + 1)}>
            <Link href={`/blog?page=${currentPage + 1}`}>
               {">"}
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};


export default Pagination;
