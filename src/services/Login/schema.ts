import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "invalid email format" }),
  password: z.string().min(6, { message: "input your password" }),
});
