
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="flex">
        <aside className="w-64 bg-gray-800 p-4">
          <nav>
            <ul>
              <li>
                <Link href="/admin" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/services" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/admin/projects" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
