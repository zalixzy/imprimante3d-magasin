import { create } from "zustand"
import { persist,  createJSONStorage }  from "zustand/middleware"  

import { Product } from "@/types"
import toast from "react-hot-toast"

interface CartStore{
    items: Product[]
    addItem: ( data: Product ) => void
    removeItem: ( id : string ) => void
    removeAll: () => void
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id)

            if(existingItem){
                return toast("Produit déjà ajouté au panier.")
            }

            set({items: [...get().items, data] });
            toast.success("Produit ajouté au panier.")


        },
            removeItem: (id: string) => {
                set({items: [...get().items.filter((item) => item.id !== id)]})
                toast.success("Produit retiré du panier.")
            },

            removeAll: () => set({items : []}),
    }),{
        name:"Stockage du panier",
        storage: createJSONStorage(() => localStorage)
    }))

export default useCart;