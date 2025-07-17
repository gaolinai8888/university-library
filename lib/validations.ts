import {z} from "zod"

export const signUpSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().min(1, 'Email is required').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
    universityId: z.coerce.number(),
    universityCard: z.string().nonempty('University Card is required'),
    password: z.string().min(8),
})

export const signInSchema = z.object({
    email: z.string().min(1, 'Email is required').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
    password: z.string().min(8),
})