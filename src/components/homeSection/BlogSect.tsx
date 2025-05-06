import React from 'react';
import CommonTitle from '../CommonTitle';
import Image from 'next/image';

interface BlogCardProps {
    imageSrc: string;
    date: string;
    title: string;
    link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, date, title, link }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[343px] h-[370px] md:w-[384px] md:h-[399px] mx-auto">
        <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="w-full h-[230px] md:h-[260px] object-cover"
        />
        <div className="py-4">
            <p className="text-gray-500 text-sm">{date}</p>
            <h3 className="text-sm text-semibold md:text-lg font-medium mt-1">{title}</h3>
            <a href={link} className="text-[#749B3F]  font-medium mt-2 inline-block">
                Read More →
            </a>
        </div>
    </div>
);

const BlogSect = () => {
    const blogs = [
        {
            imageSrc: '/images/about/about_Img1.png',
            date: 'May 23, 2024',
            title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
            link: '#',
        },
        {
            imageSrc: '/images/about/about_Img1.png',
            date: 'May 23, 2024',
            title: 'Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads',
            link: '#',
        },
        {
            imageSrc: '/images/about/about_Img1.png',
            date: 'May 23, 2024',
            title: 'The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week',
            link: '#',
        },
    ];

    return (
        <section className='container mx-auto my-36 space-y-5'>
            <header className="text-center space-y-5">
                <CommonTitle
                    content1="Our Blog"
                    content2="Fresh Harvest Blog"
                    content3="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
                    style_div="inline-block px-0 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[20px] font-semibold"
                    style_h="w-full text-[32px] md:text-3xl lg:text-5xl font-extrabold"
                    style_p="text-gray-600 max-w-xl mx-auto"
                />
            </header>
            <article className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        imageSrc={blog.imageSrc}
                        date={blog.date}
                        title={blog.title}
                        link={blog.link}
                    />
                ))}
            </article>
        </section>
    );
};

export default BlogSect;