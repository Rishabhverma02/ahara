import { z } from "zod";

/**
 * Checkout validation shared by the browser (inline errors) and the
 * /api/orders route (authoritative). One schema, no drift.
 */

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
] as const;

const required = (label: string) => z.string().trim().min(1, `${label} is required.`);

export const contactSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  marketingOptIn: z.boolean(),
});

export const addressSchema = z.object({
  firstName: required("First name"),
  lastName: required("Last name"),
  address: required("Address"),
  apartment: z.string().trim().optional().default(""),
  city: required("City"),
  state: z.enum(INDIAN_STATES, { message: "Select a state." }),
  pinCode: z.string().regex(/^[1-9]\d{5}$/, "Enter a valid 6-digit PIN code."),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type AddressInput = z.infer<typeof addressSchema>;

export const orderLineSchema = z.object({
  productId: z.number().int().positive(),
  size: z.string().min(1).max(40),
  quantity: z.number().int().min(1).max(20),
});

export const orderRequestSchema = z
  .object({
    contact: contactSchema,
    deliveryMode: z.enum(["ship", "pickup"]),
    address: addressSchema.optional(),
    shippingMethod: z.enum(["standard", "express"]),
    paymentMethod: z.enum(["online", "cod"]),
    promo: z.string().max(20).nullable(),
    lines: z.array(orderLineSchema).min(1).max(50),
  })
  .refine((o) => o.deliveryMode === "pickup" || !!o.address, {
    message: "Address is required for delivery.",
    path: ["address"],
  });

export type OrderRequest = z.infer<typeof orderRequestSchema>;

/** Flatten a zod error into { field: message } for inline form errors. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[issue.path.length - 1] ?? "form");
    out[key] ??= issue.message;
  }
  return out;
}
