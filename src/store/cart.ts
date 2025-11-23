import type { Dessert } from "@/types/products"
import {create} from "zustand"

type CartItem = Dessert & {quantity: number}

type CartStore = {
    cartItems: CartItem[]
    addToCart: (product: Dessert) => void
    decrementQuantity: (productName: Dessert['name']) => void
    removeFromCart: (productName: Dessert['name']) => void
    getProductQuantity: (productName: Dessert['name']) => number
    getTotalPrice: () => number
    clearCart: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
    cartItems: [],

    addToCart: (product: Dessert) =>
        set((state) => {
            const existingItem = state.cartItems.find(
                (item) => item.name === product.name
            )
            if (existingItem) {
                return {
                    cartItems: state.cartItems.map((item) => 
                        item.name === product.name ? {...item, quantity: item.quantity + 1} : item
                    ),
                }
            } else {
                return { cartItems: [...state.cartItems, {...product, quantity: 1}] }
            }
        }),

    decrementQuantity: (productName: Dessert['name']) =>
        set((state) => {
            const existingItem = state.cartItems.find((item) => item.name === productName )
            if (existingItem && existingItem.quantity > 1 ){
                return {
                    cartItems: state.cartItems.map((item) =>
                        item.name === productName ? {...item, quantity: item.quantity -1} : item
                    ),
                }
            } else {
                return {
                    cartItems: state.cartItems.filter(
                        (item) => item.name !== productName
                    )
                }
            }
        }),
        

    removeFromCart: (productName: Dessert['name']) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.name !== productName)
        })),

    getProductQuantity: (productName: Dessert['name']) => {
        const item = get().cartItems.find((item) => item.name === productName)
        return item?.quantity || 0
    },

    getTotalPrice: () => {
        return get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    },

    clearCart: () => set({cartItems: []})

}))