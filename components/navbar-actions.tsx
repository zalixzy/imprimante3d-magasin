"use client";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";



export const NavbarActions = () => {

    // Afin d'éviter les erreurs d'hydratation des
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() =>{
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return(
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center bg-black px-4 rounded-full py-2">
                <ShoppingBag 
                size={20}
                color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    0
                </span>
            </Button>
        </div>
    )
}

export default NavbarActions;