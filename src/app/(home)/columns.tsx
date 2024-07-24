"use client"

import {Button} from "@/components/ui/button"
import {ColumnDef} from "@tanstack/react-table"
import Link from "next/link"

export type Product = {
    id: number
    name: string
    description: string
    price: number
    stock: number
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: () => <div className="text-left font-semibold">Sr. No</div>,
    },
    {
        accessorKey: "name",
        header: () => <div className="text-left font-semibold">Name</div>,
    },
    {
        accessorKey: "description",
        header: () => <div className="text-left font-semibold">Description</div>,
    },
    {
        accessorKey: "price",
        header: () => <div className="text-left font-semibold">Price</div>,
    },
    {
        accessorKey: "stock",
        header: () => <div className="text-left font-semibold">Stock</div>,
    },
    {
        id: "actions",
        header: () => <div className="text-left font-semibold">Actions</div>,
        cell: ({row}) => {
            const product = row.original;
            return (
                <div className="flex gap-2">
                    <Link href={`/edit/${product.id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <Link href={`/delete/${product.id}`}>
                        <Button>Delete</Button>
                    </Link>
                </div>
            );
        }
    }
];