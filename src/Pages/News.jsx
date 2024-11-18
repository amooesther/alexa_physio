import React from 'react';
import { assets } from '../assets/assets';

const News = () => {
  const newsItems = [
    {
      image: assets.news1,
      title: 'Understanding the Importance of Physiotherapy',
      description: 'Learn how physiotherapy can restore mobility and improve quality of life for patients of all ages.',
      date: 'Nov 1, 2024',
    },
    {
      image: assets.news8,
      title: 'Rehabilitation Techniques for Sports Injuries',
      description: 'Explore the latest evidence-based approaches for faster recovery from sports-related injuries.',
      date: 'Oct 28, 2024',
    },
    {
      image: assets.news10,
      title: 'Managing Chronic Pain with Expert Care',
      description: 'Discover effective strategies for managing chronic pain through personalized therapy plans.',
      date: 'Oct 15, 2024',
    },
    {
      image: assets.news4,
      title: 'Alexa Clinic Expands to Lagos',
      description: 'Our new facility in Lagos is now open, providing the same quality care closer to you.',
      date: 'Sep 30, 2024',
    },
    {
      image: assets.news10,
      title: 'The Role of Exercise in Rehabilitation',
      description: 'Find out how tailored exercises can accelerate your recovery process and enhance well-being.',
      date: 'Sep 18, 2024',
    },
    {
      image: assets.news12,
      title: 'Meet Our Experts: PT. Bamidele Samuel Alade',
      description: 'Get to know the founder and visionary behind Alexa Physiotherapy and Rehabilitation Clinic.',
      date: 'Aug 5, 2024',
    },
    {
      image: assets.news7,
      title: 'Women’s Health and Physiotherapy',
      description: 'Physiotherapy solutions tailored for women’s health issues, including postnatal recovery.',
      date: 'Jul 20, 2024',
    },
    {
      image: assets.news2,
      title: 'Alexa Clinic Hosts Health Awareness Seminar',
      description: 'A recap of our recent seminar promoting preventive care and health education.',
      date: 'Jun 10, 2024',
    },
    {
      image: assets.news13,
      title: 'Celebrating 5 Years of Excellence',
      description: 'A look back at Alexa Clinic’s journey and milestones over the past five years.',
      date: 'May 5, 2024',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-secondary mb-8">
        News & Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <a
                href="#"
                className="text-primary font-medium text-sm hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
