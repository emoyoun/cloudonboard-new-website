import { z } from "zod";

export const engagementModels = [
  "Architecture review",
  "Fractional architect",
  "Cloud migration",
  "Cost optimization",
  "System integration",
] as const;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid company email."),
  model: z
    .string()
    .refine(
      (value) => (engagementModels as readonly string[]).includes(value),
      "Select an engagement model.",
    ),
  scope: z
    .string()
    .trim()
    .min(
      40,
      "Describe the system, the constraint, and what a good outcome looks like.",
    ),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
