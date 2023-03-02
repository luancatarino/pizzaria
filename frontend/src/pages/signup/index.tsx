import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import styles from "../../../styles/home.module.scss";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Pizzeria - Sign Up</title>
                <div className={styles.containerCenter}>
                    <Image src={logo} alt="Pizzeria Logo" />
                    <div className={styles.signUp}>
                        <h1>Create your account</h1>
                        <form>
                            <Input placeholder="Type your name" type="text" />
                            <Input placeholder="Type your e-mail" type="text" />
                            <Input placeholder="Type your password" type="password" />
                            <Button type="submit" loading={false}>
                                Sign Up
                            </Button>
                        </form>
                        <Link href="/" passHref legacyBehavior>
                            <a className={styles.text}>Already have an account? Login</a>
                        </Link>
                    </div>
                </div>
            </Head>
        </>
    );
}
