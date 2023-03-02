import { Button } from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
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
                            <Button type="submit" loading={true}>
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </Head>
        </>
    );
}
