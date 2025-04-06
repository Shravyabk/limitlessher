import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const successStories = [
  {
    name: 'Sudha Murthy',
    title: 'Philanthropist & Author',
    description: `Sudha Murthy broke stereotypes by becoming the first female engineer at TELCO. 
    Beyond her professional journey, she has transformed lives through her philanthropic work and passion for education.`,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMm-n9hsNxLNc34Mse7lbZBHwjYbcoSDg3Ae8bohzPUHC14AFQ48QBXIh1HcmVb2IIB6Q0yK6UxT9MVfTkg5FUyw',
  },
  {
    name: 'Gitanjali Rao',
    title: 'Young Inventor & Scientist',
    description: `At just 15, Gitanjali Rao was named TIME's Kid of the Year for using technology to solve real-world problems. 
    Her inventions inspire young girls to innovate fearlessly.`,
    image: 'https://static1.squarespace.com/static/5a1abda8aeb6251ef0a76deb/5c72d9d0ec212dd3a5632c67/66d1f976b498c963a0d35a6a/1729702674802/Rao.jpg?format=1500w',
  },
  {
    name: 'Dr. Tessy Thomas',
    title: 'Missile Woman of India',
    description: `Dr. Tessy Thomas, a scientist in DRDO, shattered gender norms in defense technology. 
    She became the first woman to lead a missile project in India.`,
    image: 'https://images.assettype.com/fortuneindia/2021-11/c648ae9c-a7ad-458e-ac45-3aa5e4b2bb3e/Tessy_Thomas.jpg',
  },
];

const SuccessStories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-limitless-purple">Success</span> Stories
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Inspiring journeys of women who have broken barriers in technology and leadership.
            </p>
          </div>

          <div className="grid gap-12">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg rounded-xl p-8"
              >
                <div className="md:w-1/2">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="rounded-lg shadow-md w-full object-cover h-80"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-semibold mb-2 text-limitless-purple">
                    {story.name}
                  </h2>
                  <h3 className="text-lg text-gray-700 mb-4 italic">{story.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
