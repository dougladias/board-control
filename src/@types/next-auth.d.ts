import { DefaulthSession } from 'next-auth';


// Este arquivo é usado para adicionar o ID do usuário ao objeto de sessão.
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaulthSession["user"];
    }
}
