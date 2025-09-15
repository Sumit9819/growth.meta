"use client";

import { useFormState } from "react-dom";
import { saveContactRequest } from "@/app/actions";

export default function ContactPage() {
  const [state, formAction] = useFormState(saveContactRequest, null);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-12">Contact Us</h1>
        <form action={formAction} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full">Submit</button>
          </div>
          {state?.message && <p className="text-green-500 mt-4 text-center">{state.message}</p>}
          {state?.errors && (
            <div className="text-red-500 mt-4 text-center">
              <ul>
                {Object.entries(state.errors).map(([key, value]) => (
                  <li key={key}>{`${key}: ${value}`}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
