import { useEffect, useState } from "react"
import { EcommerceContext } from "./EcommerceContext"
import productService from "../../services/productService";
import categoryService from "../../services/categoryService";

export const EcommerceProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getFullData = async () => {
        const productsResponse = await productService.findMany();
        const categoriesResponse = await categoryService.findMany();
        
        setProducts(productsResponse);
        setCategories(categoriesResponse);
    }

    useEffect(() => {
        getFullData();
    }, [])
    


    return (
        <EcommerceContext.Provider
            value={{
                products,
                categories
            }}
        >
            { children }
        </EcommerceContext.Provider>
    )
}