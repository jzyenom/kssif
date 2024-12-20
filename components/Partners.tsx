
const Partners: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container text-center mx-auto ">
        <h2 className="text-4xl font-Light mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6 sm:gap-2">
          {Array(6)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="partner-bg mx-auto mb-12">
                <img
                  key={idx}
                  alt={`Partner ${idx + 1}`}
                  className="h-20 mx-auto"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
