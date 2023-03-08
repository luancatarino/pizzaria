import { Header } from "@/components/Header";
import { setUpAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

export default function Category() {
    const [name, setName] = useState("");

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();

        if (name === "") {
            return;
        }

        const apiClient = setUpAPIClient();
        await apiClient.post("/category", {
            name: name,
        });

        toast.success("Category created successfully");
        setName("");
    };

    return (
        <>
            <Head>
                <title>New Category - Pizzeria</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>Teste</h1>

                    <form className={styles.form} onSubmit={handleRegister}>
                        <input
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Type the category name"
                        />
                        <button className={styles.buttonAdd} type="submit">
                            Register
                        </button>
                    </form>
                </main>
            </div>
        </>
    );
}

export const getServerSideProps = canSSRAuth(async (context) => {
    return {
        props: {},
    };
});
