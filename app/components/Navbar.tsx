import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">
          Giredi Opportunity
        </h1>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>

          <Link href="/jobs">Jobs</Link>

          <Link href="/grants">Grants</Link>

          <Link href="/scholarships">Scholarships</Link>

          <Link href="/blog">Blog</Link>

          <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded">
            Login
          </button>

          <button className="bg-blue-700 text-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}