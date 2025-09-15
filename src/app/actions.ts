'use server'

import { z } from 'zod'
import { adminDb } from '@/lib/firebase'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

type State = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string;
};

export async function saveContactRequest(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    await adminDb.collection('contactRequests').add({
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      message: validatedFields.data.message,
      submittedAt: new Date(),
    });
    return { message: 'Your message has been sent successfully!' };
  } catch {
    return { message: 'An error occurred while sending your message. Please try again.' };
  }

}
