import React from 'react';
import KfcCard from './KfcCard';

export default function Products({ addToCart, items }) {
  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-md-3 g-2">
        {items.map((item) => (
          <div key={item.productID} className="col">
            <KfcCard item={item} addToCart={addToCart} />

          </div>
        ))}
      </div>
    </div>
  );
}