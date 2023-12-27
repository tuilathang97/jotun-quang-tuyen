import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import fs from 'fs';
import path from 'path';
import { Product } from "@/app/product/[id]/page";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProduct(id : string) : Product | null | undefined {
    const products = fetchArrayJson<Product>('products');
    return products?.find((product) => product?.id?.toString() === id);
}

export function fetchArrayJson<T>(fileName : string) : T[] {
  try {
        const filePath = path.join(process.cwd(), 'public/data', `${fileName}.json`);
        if (!fs.existsSync(filePath)) {
            throw new Error('File not found');
        }
        const jsonData = fs.readFileSync(filePath);
        const items = JSON.parse(jsonData.toString());
        return items;
    } catch (err) {
        console.error('Error reading or parsing JSON file:', err);
        return [];
    }
}

export function isObject(data: any): boolean {
    return data && typeof data === 'object' && !Array.isArray(data);
}

export function isArray(data: any): boolean {
    return data && Array.isArray(data);
}