export default function FeaturedOrganizations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-8">
        Trusted Organizations
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        <div className="bg-white shadow rounded-xl p-6 text-center">
          🇺🇳
          <p className="mt-3 font-semibold">United Nations</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          🌍
          <p className="mt-3 font-semibold">UNICEF</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          🏥
          <p className="mt-3 font-semibold">WHO</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          🇪🇺
          <p className="mt-3 font-semibold">European Union</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          🌱
          <p className="mt-3 font-semibold">Gates Foundation</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          ❤️
          <p className="mt-3 font-semibold">Save the Children</p>
        </div>

      </div>

    </section>
  );
}