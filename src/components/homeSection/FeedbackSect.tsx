import React from 'react'
import CommonTitle from '../CommonTitle'

const FeedbackSect = () => {
  return (
      <div className='container mx-auto md:h-[500px]'>
          <div className='text-center space-y-4'>
              <CommonTitle
                    content1=' Testimonial'
                    content2='What Our Customers Say'
                    content3="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest"
                    style_div='inline-block px-0 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[20px] font-semibold'
                    style_h='text-3xl lg:text-5xl font-extrabold'
                    style_p='text-gray-600 max-w-xl mx-auto'
                />
          </div>
          <div className="max-w-6xl mx-auto flex flex-col lg:grid grid-cols-5 items-center lg:items-start gap-5 lg:space-y-0  mt-8">
              {/* Left Side - Image */}
              <div className=" flex-shrink-0 lg:col-span-2">
                  <img
                      src="/images/feedback/feedback1.png"
                      alt="Customer Feedback"
                      className="w-full max-w-sm rounded-lg shadow-lg"
                  />
              </div>

              {/* Right Side - Details */}
              <div className="text-center lg:text-left space-y-4 lg:col-span-3 place-items-start place-content-center">
                  <p className="text-lg text-gray-600 italic">
                      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
                  </p>
                  <h4 className="text-xl font-bold text-gray-800">Jane Doe</h4>
                  <p className="text-sm text-gray-500">Professional chef</p>
              </div>
          </div>
    </div>
  )
}

export default FeedbackSect