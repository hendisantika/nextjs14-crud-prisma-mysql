"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {productSchema} from "@/lib/schemas"
import Link from "next/link"

export default function ProductForm({
                                        product, btnName, submitFunction, title, type
                                    }: {
    product: z.infer<typeof productSchema>, btnName: string, submitFunction: any, title: string, type: string
}) {
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        }
    });

    async function handleSubmit(product: z.infer<typeof productSchema>) {
        if (type === "create") {
            await submitFunction(product);
        } else {
            await submitFunction(product);
        }
    }
    return (
        <div className="flex flex-col items-center mt-6">
            <h1 className="font-bold mb-6">{title}</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 w-[450px]">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter product name" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter product description" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter product price" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="stock"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Stock</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter product stock" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-evenly gap-4">
                        <div>
                            <Link href={"/"}>
                                <Button>Cancel</Button>
                            </Link>
                        </div>
                        <div>
                            <Button type="submit">{btnName}</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
};