
type News = {
  title: string;
  date: string;
};

const LatestNews: React.FC = () => {
  const news: News[] = [
    { title: 'Attention-Grabbing Marketing in a Noisy Market', date: 'December 21, 2022' },
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="container mx-auto px-4 text-center lg:text-left">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
          Latest News
        </h1>

        {/* News Items */}
        <div className="space-y-8">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-700 p-6 rounded-lg shadow-lg text-white text-center lg:text-left"
            >
              {/* Date Button */}
              <button className="text-xs lg:text-sm border border-white hover:bg-white hover:text-gray-800 text-white font-light px-4 lg:px-6 py-2 rounded-3xl transition-all">
                {item.date}
              </button>
              
              {/* Title */}
              <p className="text-2xl lg:text-3xl mt-6 font-light">{item.title}</p>

              {/* Read More Button */}
              <div className="mt-4">
                <button className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-2 rounded-lg transition-all">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
