"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps{
    colors: Color[]
    sizes: Size[]
}
const MobileFilters: React.FC<MobileFiltersProps> = ({
    colors,
    sizes
}) =>{
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)


    return(
        <>
            <Button onClick={onOpen} className="items-center gap-x-2 flex lg:hidden">
                Filtres
                <Plus size={20} />
            </Button>
            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                {/* arrière plan */}
                <div className="fixed inset-0 bg-black bg-opacity-25" /> 
                    {/* position dialogue */}
                 <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel 
                    className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        {/* boutton fermeture */}
                        <div className="flex justify-end px-4 items-center">
                            <IconButton icon={<X size={15} />} onClick={onClose}/>
                        </div>
                        {/* affichage filtres */}
                        <div className="py-4 pl-5">
                            <Filter
                            valueKey="sizeId"
                            name="Tailles"
                            data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Couleurs"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                 </div>
            </Dialog>
        </>
    )
}

export default MobileFilters;