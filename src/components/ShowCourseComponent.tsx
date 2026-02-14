import React from 'react'
import type { ShowCourseComponentProps } from '../types/show-course-component'

function ShowCourseComponent({ courses, filterCourseFunction, addCourseToCartFunction } : ShowCourseComponentProps) {
  return (
    <div className='product-list'>
        {filterCourseFunction.length === 0 ? (
            <p className='no-results'> Sorry, No matching Product found.</p>
        ): (
            filterCourseFunction.map((product) => (
                <div className="product" key={product.id}>
                    <img src={product.image} alt="product.name"/> console.log(product.image)
                    <h2>{product.name}</h2>
                    <p>Price: Rp{product.price}k</p>
                    <button className='add-to-cart-button' 
                        onClick={() => addCourseToCartFunction(product)}> Add to Shopping Cart
                    </button>
                </div>
            ))
        )}
    </div>
  )
}

export default ShowCourseComponent