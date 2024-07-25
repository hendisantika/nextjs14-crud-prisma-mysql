import ProductForm from "@/components/product-form";
import {handleEditProductAction} from "@/lib/actions";
import {getProductById} from "@/lib/data";

export default async function EditProductPage({params}: { params: { id: string } }) {
    const product = await getProductById(Number(params.id));
    if (!product) {
        return (
            <div className="flex mt-4 text-center">
                There is no product with the id {params.id}.
            </div>
        );
    }
    const submitFunction = handleEditProductAction.bind(null, Number(params.id));
    return (
        <ProductForm product={product} btnName="Update" submitFunction={submitFunction} type="update"
                     title={`Edit the product ${product.name}.`}></ProductForm>
    );
};