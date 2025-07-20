import {create} from "zustand";
import axios from 'axios'


const useProductStore = create((set) =>({
    products: [],
    loading: false,
    error: null,

    fetchProducts: async () => {
        set({ loading: true, error: null })
        try {
            const response = await axios.get('https://rikii.ir/api/v1/products')
            set({ products: response.data, loading: false })
        } catch (error) {
            set({ error: error.message, loading: false })
        }
    }
}))

export default useProductStore