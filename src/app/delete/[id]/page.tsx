import {Button} from "@/components/ui/button";
import {handleDeleteProductAction} from "@/lib/actions";
import {getProductById} from "@/lib/data";
import Link from "next/link";

export default async function DeleteProductPage({params}: { params: { id: string } }) {
    const product = await getProductById(Number(params.id));
    const bindedHandleDeleteProductAction = handleDeleteProductAction.bind(null, Number(params.id));
    return (
        <div className="flex flex-col items-center mt-6">
            <h1>Are you sure you want to delete <span className="font-bold">{product?.name}</span>?</h1>
            <p className="mt-6 font-semibold">Here are the details:</p>
            <ul className="mt-6">
                <li>Name: {product?.name}</li>
                <li>Price: {product?.price} Rs.</li>
                <li>Stock: {product?.stock}</li>
            </ul>
            <div className="flex items-center justify-evenly gap-4 mt-6">
                <div>
                    <Link href={"/"}>
                        <Button>Cancel</Button>
                    </Link>
                </div>
                <div>
                    <form action={bindedHandleDeleteProductAction}>
                        <Button type="submit">Delete</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};