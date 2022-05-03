import React, { useState, useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import ReactPaginate from "react-paginate"
import { FaFlag } from 'react-icons/fa';

const PER_PAGE = 6;

export const Products = () => {
  const { products } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(0);
  
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const currentPageProducts = products.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(products.length / PER_PAGE);

  return (
    <>
      {products.length !== 0 }
        <div className='container'>
            
          {currentPageProducts.map(product => (
            <div key={product.id}>
              {product.featured ?
                <div className='product-card'  >
                  <FaFlag className='flag'/>
                  <div className='product-img'> 
                    <img src={product.image } alt={product.alt} />
                   
                  </div>
                  <div className='product-name'>
                   {product.name}

                  </div>
                  <div className='product'>
                    Category : {product.category}
                  </div>
                  <div className='product'>
                    {product.price} {product.currency}
                  </div>
                  <div className='product'>
                    {product.description} 
                  </div>
                </div>
                : null}</div>
          ))}
        </div>
      
      <div className='products-container'>
        {products.length === 0 && <div>Slow Internet...No Products to Display</div>}
                {currentPageProducts.map(product => (
                    <div className='product-card' key={product.id}>
                    <div className='product-img'>
                      <img src={product.image} alt={product.alt} />
                    </div>
                    <div className='product-name'>
                      {product.name}
  
                    </div>
                    <div className='product'>
                      Category : {product.category}
                    </div>
                    <div className='product'>
                      {product.price} {product.currency}
                    </div>
                    <div className='product'>
                      {product.description}
                    </div>
                  </div>
                ))}
      </div>

      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_Link"}
        nextLinkClassName={"pagination_Link"}
        disabledClassName={"pagination_Link--disabled"}
        activeClassName={"pagination_Link--active"} />
    </>)
}
