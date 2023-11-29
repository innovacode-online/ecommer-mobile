import ecommerceDb from "../api/ecommerceDb"
import { ICategoriesResponse } from "../interfaces";


async function findMany() {
    try {
        const { data: response }= await ecommerceDb.get<ICategoriesResponse>('/categories')
        return response.data;
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default {
    findMany,
}