import Statistics from "./Statistics";
export default function Hero() {
  return (
    <section className="bg-blue-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold leading-tight">
  Connecting You to Global Opportunities
</h1>

<p className="mt-6 text-xl max-w-3xl">
  Discover jobs, grants, scholarships, fellowships, internships,
  conferences and training opportunities from trusted organizations
  around the world.
</p>
<div className="mt-10 flex flex-col md:flex-row gap-4 max-w-3xl">

  <input
    type="text"
    placeholder="Search jobs, grants, scholarships..."
    className="flex-1 px-5 py-4 rounded-lg text-black"
  />

  <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300">
    Search
  </button>

</div>
<Statistics />
      </div>
    </section>
  );
}