
import { sql } from '@/lib/db';
import { notFound } from 'next/navigation';
import { updateService } from '../../actions';

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const { rows: [service] } = await sql`
    SELECT * FROM services WHERE id = ${params.id}
  `;

  if (!service) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Service: {service.title}</h1>

      <form action={updateService} className="space-y-4">
        <input type="hidden" name="id" value={service.id} />
        <div>
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={service.title}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={service.description}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="icon" className="block mb-2">Icon URL</label>
          <input
            type="text"
            id="icon"
            name="icon"
            defaultValue={service.icon}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="order" className="block mb-2">Order</label>
          <input
            type="number"
            id="order"
            name="order"
            defaultValue={service.order}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Update Service
        </button>
      </form>
    </div>
  );
}
