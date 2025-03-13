

"use client";

//O objeto de sessão é usado para verificar se o usuário está autenticado ou não.
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export const AuthProvider = ({ children }: SessionProviderProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}