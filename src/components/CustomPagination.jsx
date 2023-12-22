import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomPagination({ totalPages, currentPage, onPageChange }) {
  const items = [];
  const maxVisiblePages = 5; // You can adjust this value based on your preference

  // Previous Page Button
  items.push(
    <Pagination.Prev
      key="prev"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 0}
    />
  );

  // Display a subset of pages
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  for (let number = startPage; number <= endPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number - 1)}
      >
        {number}
      </Pagination.Item>
    );
  }

  // Next Page Button
  items.push(
    <Pagination.Next
      key="next"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages - 1}
    />
  );

  return (
    <div className="text-center m-3">
      <Pagination>{items}</Pagination>
    </div>
  );
}

export default CustomPagination;
