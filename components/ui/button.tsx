
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}
const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type ="button",
    ...props
}, ref) => {
    return (
        <button
        className={cn(
            `
            w-auto
            rounded-full
            bg-black
            border-transparant
            px-5
            py-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-white
            hover:opacity-75
            font-semibold
            transition
            `,
            className
        )}
        ref={ref}
        {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button"

export default Button