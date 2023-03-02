import { Button } from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Input } from "../components/ui/Input";

export default function Home() {
    return (
        <>
            <Head>
                <title>Pizzeria - Login</title>
                <div className={styles.containerCenter}>
                    <Image src={logo} alt="Pizzeria Logo" />
                    <div className={styles.login}>
                        <form>
                            <Input placeholder="Type your e-mail" type="text" />
                            <Input placeholder="Type your password" type="password" />
                            <Button type="submit" loading={false}>
                                Login
                            </Button>
                        </form>
                        <Link href="/signup" passHref legacyBehavior>
                            <a className={styles.text}>Don't have an account? Sign up</a>
                        </Link>
                    </div>
                </div>
            </Head>
        </>
    );
}
