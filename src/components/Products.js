import React, { useState, useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import ReactPaginate from "react-paginate"
import { BiSortAlt2 } from 'react-icons/bi';

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
      {products.length !== 0}
      <div className='container'>

        {currentPageProducts.map(product => (
          <div key={product.id}>
            {product.featured ?
              <div>
                <div className='name'>
                  {product.name}

                </div>
                <button className='right-Cart'>ADD TO CART</button>
                <br></br>
                <div className='main-image' >
                  <img src={product.image} alt={product.alt} />
                  <div className='bottomleft' >Photo of the day</div>
                </div>
                <br></br>
                  <br></br>
                  <div className='details'>
                    <strong>Detials</strong>
                    <br></br>
                    <div className='size1'>
                      <p>Size: {product.width} x {product.height} pixel</p>
                      <br></br>
                      <p>Size: {product.size} mb</p>
                    </div>
                  </div>
                {/* </div> */}
                <div className='about'>
                  <strong>About the {product.name}</strong>
                </div>
                <br></br>
                <div className='product'>
                  {product.category}
                </div>
                <br></br>
                <div className='description'>
                {product.description}
                </div>


              </div>
              : null}</div>
        ))}

      </div>


      <div className='row'>
        <div className='choise'>
          Photography / Premium Photos
          <div className="sort">
            <BiSortAlt2 className='sortIcon' />
            <span>Sort By</span>
            <select name="" id="select" >
              <option value="price">Price</option>
              <option value="alphabetically">Alphabetically</option>
            </select>
          </div>
        </div>

        <div className='filter'>
          <div className='main'>
            <h3>Category</h3>
            <br></br>
            <input type="checkbox" className='form-check-input'/>
            
            <label> People</label>
          </div>
          <br></br>
          <div >
            <input type="checkbox" className='form-check-input' />
            <label> Premium</label>
          </div>
          <br></br>
          <div >
            <input type="checkbox" className='form-check-input' />
            <label> Pets</label>
          </div>
          <br></br>
          <div >
            <input type="checkbox" className='form-check-input' />
            <label> Food</label>
          </div>
          <br></br>
          <div >
            <input type="checkbox" className='form-check-input' />
            <label> Landmarks</label>
          </div>
          <br></br>
          <div >
            <input type="checkbox" className='form-check-input' />
            <label> Cities</label>
          </div>
          <br></br>
          <div >
            <input type="checkbox" className='form-check-input' />
            <label> Nature</label>
          </div>

          <div className='line'></div>
          <div >
            <h3>Price range</h3>
            <br></br>
            <div>
              <input type="checkbox" className='form-check-input' />
              <label> Lower than $20</label>
            </div>
            <br></br>
            <div >
              <input type="checkbox" className='form-check-input' />
              <label> $20 - $100</label>
            </div>
            <br></br>
            <div >
              <input type="checkbox" className='form-check-input' />
              <label> $100 - $200</label>
            </div>
            <br></br>
            <div >
              <input type="checkbox" className='form-check-input' />
              <label> More than $200</label>
            </div>
          </div>
        </div>

      </div>
      <div className='products-container'>
        {products.length === 0 && <div>Slow Internet...No Products to Display</div>}
        {currentPageProducts.map(product => (
          <div className='product-card' key={product.id}>
            <div >
              <img className='product-img' src={product.image} alt={product.alt} />
              <button className='product-cart'>ADD TO CART</button>
            </div>
            <div>
              
            </div>
            <div className='product-category'>
              {product.category}
            </div>
            <div className='product-name'>
              {product.name}
            </div>
            <div className='product-price'>
              {product.currency}{product.price}
            </div>
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_Link"}
        nextLinkClassName={"pagination_Link"}
        disabledClassName={"pagination_Link--disabled"}
        activeClassName={"pagination_Link--active"} />
    </>)
}
