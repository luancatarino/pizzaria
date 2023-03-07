import { Button } from "@/components/ui/Button";
import { AuthContext } from "@/contexts/AuthContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import logo from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Input } from "../components/ui/Input";
import { GetServerSideProps } from "next";
import { canSSRGuest } from "@/utils/canSSRGuest";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const { signIn } = useContext(AuthContext);

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        if (email == "" || password === "") {
            toast.warning("Missing fields");
            return;
        }

        setLoading(true);

        let data = {
            email: email,
            password: password,
        };

        await signIn(data);

        setLoading(false);
    };

    return (
        <>
            <Head>
                <title>Pizzeria - Login</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logo} alt="Pizzeria Logo" />
                <div className={styles.login}>
                    <form onSubmit={handleLogin}>
                        <Input placeholder="Type your e-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input
                            placeholder="Type your password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" loading={loading}>
                            Login
                        </Button>
                    </form>
                    <Link href="/signup" passHref legacyBehavior>
                        <a className={styles.text}>Don't have an account? Sign up</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export const getServerSideProps = canSSRGuest(async (context) => {
    return {
        props: {
            
        }
    }
})
