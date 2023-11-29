import { createContext } from "react";
import { ICategory, IProduct } from "../../interfaces";


interface ContextProps {
    products: IProduct[];
    categories: ICategory[];
}

export const EcommerceContext = createContext({} as ContextProps );