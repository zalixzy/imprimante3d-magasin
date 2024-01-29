"use client";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";



export const NavbarActions = () => {

    // Afin d'éviter les erreurs d'hydratation des
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() =>{
        setIsMounted(true);
    }, []);

    const cart = useCart()
    const router = useRouter()
    
    if(!isMounted){
        return null;
    }

    return(
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")} className="flex items-center bg-black px-4 rounded-full py-2">
                <ShoppingBag 
                size={20}
                color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    )
}

export default NavbarActions;