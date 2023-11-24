import { createContext } from "react";


interface ContextProps {
    producto: {
        name: string;
    }
}

export const EcommerceContext = createContext({} as ContextProps );