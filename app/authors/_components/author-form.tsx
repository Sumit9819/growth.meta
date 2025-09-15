'use client';

import { useState } from 'react';
import { createAuthor } from '../actions';

export function AuthorForm() {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !picture) {
      return;
    }

    const pictureUrl = await uploadPicture(picture);

    await createAuthor(name, pictureUrl);

    setName('');
    setPicture(null);
    const fileInput = document.getElementById('picture') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const uploadPicture = async (picture: File) => {
    const response = await fetch(`/api/avatar/upload?filename=${picture.name}`, {
      method: 'POST',
      body: picture,
    });

    const newBlob = await response.json();

    return newBlob.url;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Author Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="picture" className="block text-sm font-medium text-gray-700">
          Author Picture
        </label>
        <div className="mt-1 flex items-center">
          <input
            type="file"
            name="picture"
            id="picture"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
            onChange={(e) => setPicture(e.target.files ? e.target.files[0] : null)}
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Author
        </button>
      </div>
    </form>
  );
}
