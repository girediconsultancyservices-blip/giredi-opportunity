import FeaturedOrganizations from "./components/FeaturedOrganizations";
import FeaturedOpportunities from "./components/FeaturedOpportunities";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
<Navbar />
      
      <Hero />
      
      <FeaturedOpportunities />

      <FeaturedOrganizations />
      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Browse Opportunities
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold">💼 Jobs</h3>
            <p className="mt-3">
              Find NGO, UN, Government and Private Sector jobs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold">🎓 Scholarships</h3>
            <p className="mt-3">
              Undergraduate, Masters and PhD opportunities worldwide.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold">💰 Grants</h3>
            <p className="mt-3">
              Funding opportunities for NGOs, businesses and researchers.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}