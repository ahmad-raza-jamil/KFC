import React from 'react';
import Catagorie from '../Assets/product/menu_catagories.json';
import '../custom_css/category.css';

export default function Catagories({onSelectcatid}) {
  return (
    <>
    <div className='container'>
      <div className=' pb-3 category-container'>
        {Catagorie.map(cat => (
          <button type="button"
           className="btn btn-style m-2" key={cat.id}
           onClick={()=> onSelectcatid(cat.id)}
           >
            {cat.title} 
          </button>
        ))}
      </div>
      </div>
    </>
  );
}
