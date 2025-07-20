import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {calculateItemCounter, calculateTotal} from "@/helper/helper";


export const useCartStore = create(
    persist(
        (set, get) => ({
            selectedItems: [],
            total: 0,
            itemsCounter: 0,
            discount: 0,
            checkout: false,


            AddITEM: (product) => {
                const items = get().selectedItems;
                const exists = items.find(item => item.id === product.id);

                if (exists) {
                    return;
                }

                const updatedItems = [...items, { ...product, quantity: 1 }];

                set({
                    selectedItems: updatedItems,
                    itemsCounter: calculateItemCounter(updatedItems),
                    total: calculateTotal(updatedItems),
                    discount: 0,
                    checkout: false
                });

                console.log(get());
            },
            RemoveITEM: (productId) => {
                const updatedItems = get().selectedItems.filter(item => item.id !== productId);
                set({
                    selectedItems: updatedItems,
                    itemsCounter: calculateItemCounter(updatedItems),
                    total: calculateTotal(updatedItems),
                    discount: 0,
                    checkout: false
                });
                console.log(get())
            },



        }),
        {
            name: 'cart-storage',
        }
    )
)
