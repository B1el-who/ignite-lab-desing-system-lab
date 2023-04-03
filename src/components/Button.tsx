import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className } : TextProps){
    const Comp = asChild ? Slot : 'button';
    
    return (
        <Comp 
            className={clsx(
                'text-gray-100 font-sans', 
            )}
        >
            {children}
        </Comp>
    )
}