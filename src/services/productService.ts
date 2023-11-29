import ecommerceDb from "../api/ecommerceDb"
import { IProductsResponse } from "../interfaces"


async function findMany() {
    try {
        const { data: response }= await ecommerceDb.get<IProductsResponse>('/products')
        return response.data;
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default {
    findMany,
}