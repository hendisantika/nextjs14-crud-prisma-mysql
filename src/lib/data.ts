"use server";

import prisma from "@/lib/db"
import {productSchema} from "@/lib/schemas"
import {z} from "zod"
import {unstable_noStore as noStore} from 'next/cache'

export const getAllProducts = async () => {
    noStore();
    try {
        const products = await prisma.product.findMany();
        return products;
    } catch (error) {
        console.log(`Error at getAllProducts -> ${error}`);
        return null;
    }
};

export const createProduct = async (product: z.infer<typeof productSchema>) => {
    noStore();
    try {
        await prisma.product.create({
            data: product
        });
        return {error: ""};
    } catch (error) {
        console.log(`Error at createProduct -> ${error}`);
        return {error: "We are facing an issue at this moment."};
    }
};

export const getProductById = async (id: number) => {
    noStore();
    try {
        const products = await prisma.product.findUnique({
            where: {
                id: id
            }
        });
        return products;
    } catch (error) {
        console.log(`Error at createProduct -> ${error}`);
        return null
    }
};

export const updateProductById = async (id: number, product: z.infer<typeof productSchema>) => {
    noStore()
    try {
        await prisma.product.update({
            where: {
                id: id
            },
            data: product
        });
        return {error: ""};
    } catch (error) {
        console.log(`Error at updateProductById -> ${error}`);
        return {error: "We are facing an issue at this moment."};
    }
};

export const deleteProductById = async (id: number) => {
    noStore();
    try {
        await prisma.product.delete({
            where: {
                id: id
            }
        });
        return {error: ""};
    } catch (error) {
        console.log(`Error at deleteProductById -> ${error}`);
        return null
    }
};