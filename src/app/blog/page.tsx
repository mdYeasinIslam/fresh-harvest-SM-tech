import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

const BlogPage = () => {
    return (
        <section>
            <Navbar />
              <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
                    Fresh Harvest Blog
                </h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Welcome to our blog! Here, we share tips, recipes, and stories about fresh, organic, and sustainable food.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Blog Post 1 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Image
                                   src='/images/blog/image1.png'
                                   alt={'blog-1'}
                                   width={500}
                                   height={500}
                                   className="w-full h-[230px] md:h-[260px] flex items-center justify-center"
                               />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-green-600 mb-4">
                                5 Tips for Keeping Your Produce Fresh
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Learn how to store your fruits and vegetables to keep them fresh for longer. These simple tips will help reduce food waste and save money.
                            </p>
                            <a
                                href="#"
                                className="text-green-500 hover:underline font-medium"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Image
                                   src='/images/blog/image2.png'
                                   alt={'blog-1'}
                                   width={500}
                                   height={500}
                                   className="w-full h-[230px] md:h-[260px] flex items-center justify-center"
                               />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-green-600 mb-4">
                                10 Easy Recipes with Fresh Ingredients
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Discover quick and healthy recipes that use fresh, seasonal ingredients. Perfect for busy weeknights or weekend meals.
                            </p>
                            <a
                                href="#"
                                className="text-green-500 hover:underline font-medium"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      
    );
};

export default BlogPage;