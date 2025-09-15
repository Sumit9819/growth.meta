'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, FormState } from './actions';
import { ArrowRightIcon, MailIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';

const initialState: FormState = {
  message: '',
  errors: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="inline-flex items-center justify-center w-full px-8 py-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-lg glow-effect disabled:opacity-50"
    >
      {pending ? 'Sending...' : 'Send Message'}
      {!pending && <ArrowRightIcon className="w-5 h-5 ml-2" />}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message.startsWith('Success')) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-balance mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-balance">We&apos;d love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
        </div>

        <div className="mt-20 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 bg-white dark:bg-gray-700 rounded-2xl p-8 lifted-shadow">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <form ref={formRef} action={formAction}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <UserIcon className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                  <input type="text" name="name" id="name" placeholder="Full Name" className="pl-12 pr-4 py-3 w-full bg-gray-100 dark:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
                </div>
                <div className="relative">
                  <MailIcon className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                  <input type="email" name="email" id="email" placeholder="Email Address" className="pl-12 pr-4 py-3 w-full bg-gray-100 dark:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
                </div>
              </div>
              <div className="mt-6 relative">
                <PhoneIcon className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                <input type="tel" name="phone" id="phone" placeholder="Phone Number (Optional)" className="pl-12 pr-4 py-3 w-full bg-gray-100 dark:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div className="mt-6">
                <textarea name="message" id="message" rows={4} placeholder="Your Message" className="px-4 py-3 w-full bg-gray-100 dark:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
              </div>
              <div className="mt-6">
                <SubmitButton />
              </div>
              {state.message.startsWith('Success') && (
                <p className="text-green-500 text-sm mt-4 text-center">{state.message}</p>
              )}
              {state.message.startsWith('Error') && (
                <p className="text-red-500 text-sm mt-4 text-center">{state.message}</p>
              )}
            </form>
          </div>
          <div className="md:w-1/2 bg-white dark:bg-gray-700 rounded-2xl p-8 lifted-shadow">
            <h2 className="text-4xl font-bold mb-6">Our Office</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Marketing Lane, Growth City, 12345</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300"><a href="mailto:hello@growthmeta.com" className="text-purple-500 hover:underline">hello@growthmeta.com</a></p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300"><a href="tel:+1234567890" className="text-purple-500 hover:underline">+1 (234) 567-890</a></p>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-64 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
