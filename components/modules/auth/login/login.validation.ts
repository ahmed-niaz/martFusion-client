import z from "zod";

export const loginSchema = z.object({
  email: z.email("email is required"),
  password: z
    .string("password confirmation is required")
    .min(8, "password must be 8 characters"),
});
