import React from 'react'
import { Product } from '@/types/product'

const ExtraInfo = ({product}:{product:Product}) => {
  return (
    <section className='container mx-auto '>
      <div className='w-3/4 flex flex-col gap-4'>
        <div className="w-1/2 flex flex-col md:flex-row gap-3 md:gap-5 items-end text-center">
            <button className="w-full  flex items-center gap-4 px-4 py-2 bg-[#749B3F] text-white rounded hover:bg-green-600 text-center">
               Description
            </button>
            <button className=" w-full flex items-center gap-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-green-600 text-center">
                Review
            </button>
          </div>  
          <div>
              <p className=" text-gray-700">
              {product?.description}     
              </p>
          </div>
    </div>
    </section>
      
    
  )
}

export default ExtraInfo