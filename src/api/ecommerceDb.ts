import axios from "axios";


const ecommerceDb = axios.create({
    baseURL: 'https://store.innovacode.online/api',
    headers: {
        Accept: 'application/json'
    }
});

export default ecommerceDb;