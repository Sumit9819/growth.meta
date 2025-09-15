
import { sql } from '@/lib/db';
import Link from 'next/link';
import { deleteService } from './actions';

interface Service {
  id: number;
  title: string;
  description: string;
  order: number;
}

export default async function ServicesAdminPage() {
  const { rows: services } = await sql`SELECT * FROM services ORDER BY "order"`;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <Link href="/admin/services/new" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          New Service
        </Link>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Order</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service: Service) => (
              <tr key={service.id} className="border-b border-gray-700">
                <td className="p-4">{service.title}</td>
                <td className="p-4">{service.description}</td>
                <td className="p-4">{service.order}</td>
                <td className="p-4 flex items-center">
                  <Link href={`/admin/services/${service.id}/edit`} className="text-blue-500 hover:underline mr-4">
                    Edit
                  </Link>
                  <form action={deleteService}>
                    <input type="hidden" name="id" value={service.id} />
                    <button type="submit" className="text-red-500 hover:underline">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
