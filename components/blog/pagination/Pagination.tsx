import React from "react";
import { useRouter } from "next/router";
import style from "./pagination.module.css";
import Head from "next/head"; // Import Head from next/head

const Pagination = ({ currentPage, totalPages, setCurrentPage }: any) => {
  const pageNumbers:any = [];
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

  return (
    <>
      {/* Add rel="prev" and rel="next" tags in the <Head> component */}
      <Head>
      <link rel="canonical" href={`/blog`} />
        {currentPage > 1 && (
          <link rel="prev" href={`/blog?page=${currentPage - 1}`} />
        )}
        {currentPage < totalPages && (
          <link rel="next" href={`/blog?page=${currentPage + 1}`} />
        )}
      </Head>

      <ul className={style.pagination_bg}>
        {currentPage - 1 >= 1 && (
          <button onClick={() => handlePageClick(currentPage - 1)}>{"<"}</button>
        )}
        {startPage > 1 && <li onClick={() => handlePageClick(1)}>1</li>}

        {startPage > 2 && (
          <li>
            <span>...</span>
          </li>
        )}

        {pageNumbers.map((number:any) => (
          <li
            key={number}
            className={`${number === currentPage ? " Paginationactive" : ""}`}
            onClick={() => handlePageClick(number)}
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
          <li onClick={() => handlePageClick(totalPages)}>{totalPages}</li>
        )}
        {currentPage + 1 <= totalPages && (
          <button onClick={() => handlePageClick(currentPage + 1)}>{">"}</button>
        )}
      </ul>
    </>
  );
};

export default Pagination;
