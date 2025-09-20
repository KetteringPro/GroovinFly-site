import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-5 py-3 flex justify-between items-center">
        <Link href="/" className="text-purple-800 font-bold text-lg hover:text-purple-900">
          GroovinFly
        </Link>
        <div className="flex gap-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            Home
          </Link>
          <Link
            href="/trips"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            2025 Trips
          </Link>
          <Link
            href="/trips/2026"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            2026 Preview
          </Link>
        </div>
      </div>
    </nav>
  );
}