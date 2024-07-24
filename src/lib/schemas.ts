import {z} from "zod";

export const productSchema = z.object({
    name: z.string().min(3, {message: "Please enter name."}),
    description: z.string().min(3, {message: "Please enter description."}),
    price: z.coerce.number({invalid_type_error: "Please enter only number."}).gte(1, {message: "Please enter price grater than 1."}),
    stock: z.coerce.number({invalid_type_error: "Please enter only number."}).gte(1, {message: "Please enter stock greater than 1."})
});