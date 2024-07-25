import ProductForm from "@/components/product-form";
import {handleCreateProductAction} from "@/lib/actions";
import {productSchema} from "@/lib/schemas"
import {z} from "zod";

export default function CreateProductPage() {
    const product: z.infer<typeof productSchema> = {
        name: '',
        description: '',
        price: 0,
        stock: 0
    };
    const submitFunction = handleCreateProductAction.bind(null);
    return (
        <ProductForm product={product} btnName="Submit" submitFunction={submitFunction} title="Create a new product."
                     type="create"></ProductForm>
    );
};