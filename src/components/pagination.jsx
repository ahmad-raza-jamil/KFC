import React from 'react';

export default function Pagination({ currentPage, totalPages, onNext, onPrevious }) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
        >
          <a className="page-link" href='#home' onClick={() => onNext(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className='mt-5 pagination-container' style={{ background: '#000' }}>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a className="page-link" href='#home' onClick={onPrevious}>
                <i className="fas fa-angle-left"></i>
              </a>
            </li>
            {renderPageNumbers()}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <a className="page-link" href='#home' onClick={onNext}>
                <i className="fas fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
