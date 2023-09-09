import React, { useState } from 'react';
import Products from '../components/products';
import Catagories from '../components/catagories';
import Pagination from '../components/pagination';
import allItems from '../Assets/product/menu_items.json';

export default function MenuPage({ addToCart }) {
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter items based on category and pagination
  const filteredItems = allItems.filter(
    (item) => selectedCatId === null || item.catogorieID === selectedCatId
  );

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const onSelectcatid = (catid) => {
    setSelectedCatId(catid);
    setCurrentPage(1); // Reset to the first page when selecting a category
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className='container'>
        <Catagories onSelectcatid={onSelectcatid} />
        <Products addToCart={addToCart} items={currentItems} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredItems.length / itemsPerPage)}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
        />
      </div>
    </>
  );
}
