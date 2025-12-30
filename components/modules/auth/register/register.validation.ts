import z from "zod/v3";

export const registrationSchema = z
  .object({
    name: z
      .string({ required_error: "name is required" })
      .min(2, "name must be between 2 and 50 characters")
      .max(50, "name must be between 2 and 50 characters"),
    email: z
      .string({
        required_error: "email is required",
      })
      .email("invalid email address"),
    password: z
      .string({ required_error: "password confirmation is required" })
      .min(8, "password must be 8 characters"),
    passwordConfirmation: z
      .string({ required_error: "password is required" })
      .min(1),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // This shows the error under the passwordConfirmation field
  });
