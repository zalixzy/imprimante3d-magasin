"use client"

import { ShoppingCart } from "lucide-react"
import React from "react"

import { Product } from "@/types"

import Currency from "@/components/ui/currency"
import Button from "@/components/ui/button"
import useCart from "@/hooks/use-cart"



interface InfoProps{
    data: Product
}
const Info: React.FC<InfoProps> = ({
    data
}) =>{
    const cart = useCart();
    const addToCart = () => {
        cart.addItem(data);
    }
    return(
        
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex justify-between items-end">
                <p className="text-2xl text-gray-900 ">
                    <Currency value={data.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className=" flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Taille:</h3>
                    <div>
                        {data?.size?.name} 
                        {/* ou afficher la valeur de la taille */}
                        {/* {data?.size?.value} */}
                    </div>
                </div>
                <div className=" flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Couleur:</h3>
                    <div 
                    style = {{backgroundColor: data?.color?.value}}
                    className="h-6 w-6 rounded-full border border-gray-600"
                    />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={addToCart} className=" flex items-center gap-x-2">
                    Ajouter au panier
                    <ShoppingCart/>
                </Button>
            </div>
        </div>
    )
}

export default Info