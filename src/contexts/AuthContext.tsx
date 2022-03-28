import { useRouter } from "next/router";
import { createContext, ReactNode, useState } from "react";
import { setCookie } from 'nookies';
import { api } from "../services/api";

type User = {
    email: string;
    name: string;
}

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    isAuthenticated: boolean;
    user: User;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;
    const router = useRouter();

    async function signIn({ email, password}: SignInCredentials) {
        try {
            const response  = await api.post('/auth/login', { 
                email, 
                password
            });

            const { name } = response.data.idToken.payload;
            const { jwtToken } = response.data.idToken;
            const { token } = response.data.refreshToken;

            setCookie(undefined, 'legendcards.token', jwtToken, {
                maxAge: 60 * 60 * 24 * 30, //30 dias
                path: '/'
            });
            setCookie(undefined, 'legendcards.refresh-token', token, {
                maxAge: 60 * 60 * 24 * 30, //30 dias
                path: '/'
            });

            setUser({
                email,
                name
            });

            router.push('/dashboard')

            console.log(response.data, name);
        } catch (err) {
            console.log(err, 'MENSAGEM DE ERRO');
        }

    }
    return(
        <AuthContext.Provider value={{
            isAuthenticated,
            signIn,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}