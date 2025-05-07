import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

const blogs = [
    {
        imageSrc: '/images/blog/image1.png',
        date: 'May 23, 2024',
        title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
        details:
            'Learn how to store your fruits and vegetables to keep them fresh for longer. These simple tips will help reduce food waste and save money.',
        link: '/blog',
    },
    {
        imageSrc: '/images/blog/image2.png',
        date: 'May 23, 2024',
        title:
            'Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads',
        details:
            'Discover quick and healthy recipes that use fresh, seasonal ingredients. Perfect for busy weeknights or weekend meals.',
        link: '/blog',
    },
    {
        imageSrc: '/images/blog/image3.png',
        date: 'May 23, 2024',
        title:
            'The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week',
        details:
            'Meal prepping can save time and ensure you eat healthy meals throughout the week. Learn the basics and get started today!',
        link: '/blog',
    },
];

const BlogCard = ({
    imageSrc,
    title,
    details,
    link,
}: {
    imageSrc: string;
    title: string;
    details: string;
    link: string;
}) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="w-full h-[230px] md:h-[260px] flex items-center justify-center"
        />
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{details}</p>
            <a href={link} className="text-green-500 hover:underline font-medium">
                Read More →
            </a>
        </div>
    </div>
);

const BlogPage = () => {
    return (
        <section>
            <Navbar />
            <div className="bg-gray-50 min-h-screen py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
                        Fresh Harvest Blog
                    </h1>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        Welcome to our blog! Here, we share tips, recipes, and stories about
                        fresh, organic, and sustainable food.
                    </p>

                    <div className="grid gap-8 md:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <BlogCard
                                key={index}
                                imageSrc={blog.imageSrc}
                                title={blog.title}
                                details={blog.details}
                                link={blog.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
