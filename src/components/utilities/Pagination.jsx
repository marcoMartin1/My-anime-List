import React, { useState } from 'react';

const Pagination = ({ page, lastpage, setPage }) => {
  const [inputPage, setInputPage] = useState(""); // Store user input

  const scrollTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handlePageChange = (e) => {
    setInputPage(e.target.value);
  };

  const handlePageSubmit = () => {
    let newPage = parseInt(inputPage, 10);
    if (!isNaN(newPage) && newPage > 0 && newPage <= lastpage) {
      setPage(newPage);
      setInputPage(""); // Reset input
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center overflow-x-visible items-center py-6 px-2 gap-4 text-color-primary text-xl mt-2">


          {/* Input for page number */}
      <input
        type="number"
        className="w-16 text-center p-1 rounded-md border border-gray-500 text-black appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        placeholder={page}
        value={inputPage}
        onChange={handlePageChange}
        onKeyDown={(e) => e.key === "Enter" && handlePageSubmit()}
      />
      <button onClick={handlePageSubmit} className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-800">
        Go
      </button>
      {/* Prev Button */}
      {page <= 1 ? null :  (
        <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">
          Prev
        </button>
      )}

    

      {/* Page Info */}
      <p>
        {page} of {lastpage}
      </p>

      {/* Next Button */}
      {page >= lastpage ? null : (
        <button onClick={handleNextPage} className="transition-all hover:text-color-accent">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
