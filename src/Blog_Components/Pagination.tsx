import React, { useState } from 'react';

interface PaginationProps {
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  totalPages = 5, 
  currentPage = 1, 
  onPageChange 
}) => {
  // Handle page change
  const handlePageChange = (page: number) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange?.(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 pt-10">
      {/* Page buttons */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-14 h-14 flex items-center justify-center rounded ${
            page === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}
      
      {/* Next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-14 h-14 flex items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
      >
        &gt;
      </button>
      
      {/* Last page button */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="w-14 h-14 flex items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;