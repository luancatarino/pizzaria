import { AuthContext } from "@/contexts/AuthContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import logo from "../../../public/logo.svg";
import styles from "../../../styles/home.module.scss";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function SignUp() {
    const { signUp } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSignUp = async (event: FormEvent) => {
        event.preventDefault();

        if (name === "" || email === "" || password === "") {
            alert("Missing fields");
            return;
        }
        setLoading(true);

        let data = {
            name,
            email,
            password,
        };

        await signUp(data);

        setLoading(false);
    };

    return (
        <>
            <Head>
                <title>Pizzeria - Sign Up</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logo} alt="Pizzeria Logo" />
                <div className={styles.signUp}>
                    <h1>Create your account</h1>
                    <form onSubmit={handleSignUp}>
                        <Input placeholder="Type your name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input placeholder="Type your e-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input
                            placeholder="Type your password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" loading={loading}>
                            Sign Up
                        </Button>
                    </form>
                    <Link href="/" passHref legacyBehavior>
                        <a className={styles.text}>Already have an account? Login</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
