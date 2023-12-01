import { useEffect, useState } from "react"
import ecommerceDb from "../api/ecommerceDb";
import axios from "axios";

export const useFetch = <T>(url: string) => {

    const [data, setData] = useState<undefined | T>(undefined);

    const [isLoading, setIsLoading] = useState(false);
    
    const [isError, setIsError] = useState({
        hasError: false,
        message: '',
    })


    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await ecommerceDb.get(url);
            setData( response.data.data as T )
            setIsError({
                hasError: false,
                message: '',
            })
            setIsLoading(false);

        } catch (error) {

            if( axios.isAxiosError( error ) ){
                setIsError({
                    hasError: true,
                    message: error.response.data.message,
                })
            }

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    
    return {
        data,
        isError,
        isLoading
    }
}