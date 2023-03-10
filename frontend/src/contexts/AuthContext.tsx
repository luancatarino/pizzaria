import { api } from "@/services/apiClient";
import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

type UserProps = {
    id: string;
    name: string;
    email: string;
};

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
};

type SignInProps = {
    email: string;
    password: string;
};

type SignUpProps = {
    name: string;
    email: string;
    password: string;
};

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
    try {
        destroyCookie(undefined, "@pizzeria.token");
        Router.push("/");
    } catch {
        console.log("An error ocurred");
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | any>();
    const isAuthenticated = !!user!;

    useEffect(() => {
        const { "@pizzeria.token": token } = parseCookies();

        if (token) {
            api.get("/userinfo")
                .then((response) => {
                    const { id, name, email } = response.data;

                    setUser({
                        id,
                        name,
                        email,
                    });
                })
                .catch(() => {
                    signOut();
                });
        }
    }, []);

    const signIn = async ({ email, password }: SignInProps) => {
        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            const { id, name, token } = response.data;

            setCookie(undefined, "@pizzeria.token", token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/",
            });

            setUser({
                id,
                name,
                email,
            });

            //Passar o token para as pr??ximas requisi????es
            api.defaults.headers["Authorization"] = `Bearer ${token}`;

            toast.success("Login successful");

            Router.push("/dashboard");
        } catch (error) {
            toast.error("Login error");
            console.log("An error occurred", error);
        }
    };

    const signUp = async ({ name, email, password }: SignUpProps) => {
        try {
            const response = await api.post("/users", {
                name,
                email,
                password,
            });

            toast.success("Account created");

            Router.push("/");
        } catch (error) {
            toast.error("Create account error");
            console.log("An error occurred", error);
        }
    };

    return <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>{children}</AuthContext.Provider>;
}
