import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'

const ProductCatagory = () => {
  const {products} = useAppContext()
  const {category} = useParams()

  const searchCategory = categories.find((item)=> item.path.toLowerCase() === category)
  const filteredProducts = products.filter((product)=> product.category.toLowerCase() === category)
  return (
    <div>
        {searchCategory && (
          <div className='flex flex-col items-end w-max'>
             <p className='text-2xl font-medium'>{searchCatagory.text.toUpperCase}</p>
             <div className='w-16 h-0.5 bg-primary rounded-full'></div>
          </div>
        )}
    </div>
  )
}

export default ProductCatagory