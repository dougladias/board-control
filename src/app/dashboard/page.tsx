import { Container } from '@/components/container';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

// Esse componente é a página Dashboard
export default async function Dashboard(){
    const session = await getServerSession(authOptions);

    if(!session || !session.user){
        redirect('/');
    }   
    


    return (
        <Container>   
            <h1>Página Dashboard</h1>
        </Container>
    )
}