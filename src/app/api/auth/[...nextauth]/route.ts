import NextAuth from "next-auth";
import { authOptions } from '@/lib/auth';


// Este arquivo é usado para configurar as opções de autenticação do NextAuth.js.
const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };

