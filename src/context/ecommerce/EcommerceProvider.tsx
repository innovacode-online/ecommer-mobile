import { EcommerceContext } from "./EcommerceContext"

export const EcommerceProvider = ({ children }) => {

    const producto = {
        name: 'Producto 1',
    }

    return (
        <EcommerceContext.Provider
            value={{
                producto,
            }}
        >
            { children }
        </EcommerceContext.Provider>
    )
}