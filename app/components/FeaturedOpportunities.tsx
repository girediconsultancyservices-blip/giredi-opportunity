export default function FeaturedOpportunities() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-8">
        Featured Opportunities
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow p-6 border">
          <span className="text-sm text-blue-600 font-semibold">
            United Nations
          </span>

          <h3 className="text-xl font-bold mt-2">
            Programme Officer
          </h3>

          <p className="text-gray-600 mt-2">
            Location: Abuja, Nigeria
          </p>

          <button className="mt-4 bg-blue-700 text-white px-5 py-2 rounded">
            View Details
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 border">
          <span className="text-sm text-green-600 font-semibold">
            Scholarship
          </span>

          <h3 className="text-xl font-bold mt-2">
            Mastercard Foundation Scholarship
          </h3>

          <p className="text-gray-600 mt-2">
            Study in Canada
          </p>

          <button className="mt-4 bg-blue-700 text-white px-5 py-2 rounded">
            Apply Now
          </button>
        </div>

      </div>

    </section>
  );
}