import React from 'react';
import CommonTitle from '../CommonTitle';
import Image from 'next/image';

interface BlogCardProps {
    imageSrc: string;
    date: string;
    title: string;
    link: string;
}
//  w-[343px] h-[370px] lg:w-[340px] xl:w-[384px] md:h-[399px]
const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, date, title, link }) => (
    <div className="bg-white shadow-sm rounded-lg  space-y-3 pl-1">
        <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="w-full h-[230px] md:h-[260px] flex items-center justify-center"
        />
        <div className="space-y-2">
            <p className="text-gray-500 text-sm">{date}</p>
            <h3 className="text-sm text-semibold md:text-md xl:text-lg font-medium ">{title}</h3>
            <a href={link} className="text-[#FF6A1A]   font-semibold inline-block">
                Read More →
            </a>
        </div>
    </div>
);

const BlogSect = () => {
    const blogs = [
        {
            imageSrc: '/images/blog/image1.png',
            date: 'May 23, 2024',
            title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
            link: '#',
        },
        {
            imageSrc: '/images/blog/image2.png',
            date: 'May 23, 2024',
            title: 'Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads',
            link: '#',
        },
        {
            imageSrc: '/images/blog/image3.png',
            date: 'May 23, 2024',
            title: 'The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week',
            link: '#',
        },
    ];

    return (
        <section className='container mx-auto my-36 space-y-5 px-5 md:px-2'>
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
            <article className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-4 md:gap-3 xl:gap-6">
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