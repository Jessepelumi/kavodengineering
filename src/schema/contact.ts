import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "The name field cannot be empty" }),
  email: z.string().email("Please enter a valid email address"),
  contactNumber: z
    .string()
    .optional()
    .refine((value) => !value || /^\d{10,}$/.test(value), {message: "Invalid Phone number"}),
  subject: z.string().min(1, { message: "Please choose a subject" }),
  message: z.string().min(1, { message: "Please enter a message" }),
});
