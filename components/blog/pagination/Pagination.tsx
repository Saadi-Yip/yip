import React from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router
import style from "./pagination.module.css";
import  Head  from 'next/head';

const Pagination = ({ currentPage, totalPages, setCurrentPage }: any) => {
  const pageNumbers = [];
  const router = useRouter(); // Get the router object

  // Function to handle page click
  const handlePageClick = (pageNumber: any) => {
    const queryParams = { ...router.query };
    queryParams.page = pageNumber; // Update the "page" query parameter

    // Push the new route with the updated query parameters
    router.push({
      pathname: "/blog", // Update with your desired pathname
      query: queryParams,
    });

    // Update the current page state
    setCurrentPage(pageNumber);
  };

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
    <>
      <Head>
        {currentPage > 1 && (
          <link rel="prev" href={`/blog?page=${currentPage - 1}`} />
        )}
        {currentPage < totalPages && (
          <link rel="next" href={`/blog?page=${currentPage + 1}`} />
        )}
      </Head>
      <ul className={style.pagination_bg}>
        {currentPage - 1 >= 1 && (
          <button onClick={() => handlePageClick(currentPage - 1)}>
            {"<"}
          </button>
        )}
        {startPage > 1 && <li onClick={() => handlePageClick(1)}>1</li>}

        {startPage > 2 && (
          <li>
            <span>...</span>
          </li>
        )}

        {pageNumbers.map((number) => (
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
          <button onClick={() => handlePageClick(currentPage + 1)}>
            {">"}
          </button>
        )}
      </ul>
    </>
  );
};

export default Pagination;
