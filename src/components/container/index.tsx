import { ReactNode } from 'react';


//Esse componente é um container que centraliza o conteúdo da página.
export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="w-full max-w-7xl mx-auto px-2 ">
           {children}
        </div>
    )
}