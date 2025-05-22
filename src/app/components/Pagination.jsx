import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const getPaginationItems = () => {
    const pages = [];

    if (currentPage > 3) {
      pages.push(1, '...');
    } else {
      for (let i = 1; i < Math.min(4, totalPages + 1); i++) {
        pages.push(i);
      }
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    for (let i = startPage; i <= endPage; i++) {
      if (!pages.includes(i)) pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...', totalPages);
    } else {
      for (let i = totalPages - 2; i <= totalPages; i++) {
        if (i > 1 && !pages.includes(i)) pages.push(i);
      }
    }

    return pages;
  };

  const pages = getPaginationItems();

  return (
    <div className="flex justify-center mt-4 items-center gap-2 rtl:space-x-reverse text-[#000000]">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="text-xl px-2 disabled:opacity-30"
      >
        &lt;
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 text-xl">...</span>
        ) : (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`rounded-full w-[22px] h-[22px] text-[14px] ${
              currentPage === page
                ? "bg-teal-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="text-xl px-2 disabled:opacity-30"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
