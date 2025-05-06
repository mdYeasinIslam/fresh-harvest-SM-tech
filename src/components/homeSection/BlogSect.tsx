import React from 'react'
import CommonTitle from '../CommonTitle'
import Image from 'next/image'

const BlogSect = () => {
  return (
    <section>
        <header className='text-center space-y-5'>
              <CommonTitle
                  content1='Our Blog'
                  content2='Fresh Harvest Blog'
                  content3='Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.'
                   style_div='inline-block px-0 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[20px] font-semibold'
                    style_h='w-2/3 mx-auto md:w-full text-[32px] md:text-3xl lg:text-5xl font-extrabold'
                    style_p='text-gray-600 max-w-xl mx-auto'
              />
          </header>
          <article className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-[343px] h-[367px] md:w-[384px] md:h-[395px] mx-auto">
                  <Image
                      src="/images/about/about_Img1.png"
                      alt="Blog 1"
                      width={500}
                      height={500}
                      className="w-full h-2/3 object-cover" />
                  <div className="p-4">
                      <p className="text-gray-500 text-sm">May 23, 2024</p>
                      <h3 className="text-lg font-semibold mt-2">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h3>
                      <a href="#" className="text-[#749B3F] font-medium mt-2 inline-block">Read More →</a>
                  </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-[343px] h-[367px] md:w-[384px] md:h-[395px] mx-auto">
                   <Image
                      src="/images/about/about_Img1.png"
                      alt="Blog 1"
                      width={500}
                      height={500}
                      className="w-full h-2/3 object-cover" />
                  <div className="p-4">
                      <p className="text-gray-500 text-sm">May 23, 2024</p>
                      <h3 className="text-lg font-semibold mt-2">Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads</h3>
                      <a href="#" className="text-[#749B3F] font-medium mt-2 inline-block">Read More →</a>
                  </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-[343px] h-[367px] md:w-[384px] md:h-[395px] mx-auto">
                  <Image
                      src="/images/about/about_Img1.png"
                      alt="Blog 1"
                      width={500}
                      height={500}
                      className="w-full h-2/3 object-cover" />
                  <div className="p-4">
                      <p className="text-gray-500 text-sm">May 23, 2024</p>
                      <h3 className="text-lg font-semibold mt-2">The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</h3>
                      <a href="#" className="text-[#749B3F] font-medium mt-2 inline-block">Read More →</a>
                  </div>
              </div>
          </article>
    </section>
  )
}

export default BlogSect