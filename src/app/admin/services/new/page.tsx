
import { createService } from "./actions";

export default function NewServicePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">New Service</h1>

      <form action={createService} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            name="description"
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
            defaultValue={0}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Create Service
        </button>
      </form>
    </div>
  );
}
