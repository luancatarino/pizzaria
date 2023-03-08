import { Header } from "@/components/Header";
import { setUpAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

type ItemProps = {
    id: string;
    name: string;
};

interface CategoryProps {
    categoryList: ItemProps[];
}

export default function Product({ categoryList }: CategoryProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [imageAvatar, setImageAvatar] = useState<any>(null);
    const [categories, setCategories] = useState(categoryList || []);
    const [categorySelected, setCategorySelected] = useState(0);

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const data = new FormData();

            if (name === "" || price === "" || description === "" || imageAvatar === null) {
                toast.error("Missing fields");
                return;
            }

            data.append("name", name);
            data.append("price", price);
            data.append("description", description);
            data.append("category_id", categories[categorySelected].id);
            data.append("file", imageAvatar);

            const apiClient = setUpAPIClient();

            await apiClient.post("product", data);

            toast.success("Product saved successfully");
        } catch (error) {
            toast.error("Error when registering");
        }

        setName("");
        setPrice("");
        setDescription("");
        setImageAvatar(null);
        setAvatarUrl("");
    };

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }

        const image = e.target.files[0];

        if (!image) {
            return;
        }

        if (image.type === "image/jpeg" || image.type === "image/png") {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleChangeCategory = (e: any) => {
        setCategorySelected(e.target.value);
    };

    return (
        <>
            <Head>
                <title>New Product - Pizzeria</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>New Product</h1>

                    <form onSubmit={handleRegister} className={styles.form}>
                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={30} color="#fff" />
                            </span>

                            <input onChange={handleFile} type="file" accept="image/png, image/jpeg" />

                            {avatarUrl && (
                                <img className={styles.preview} src={avatarUrl} alt="Product Image" width="250" height="250" />
                            )}
                        </label>

                        <select value={categorySelected} onChange={handleChangeCategory}>
                            {categories.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                );
                            })}
                        </select>

                        <input
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Type the product name"
                        />
                        <input
                            className={styles.input}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            placeholder="Type the product price"
                        />

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.input}
                            placeholder="Describe your product"
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

export const getServerSideProps = canSSRAuth(async (context: any) => {
    const apiClient = setUpAPIClient(context);

    const response = await apiClient.get("/category");

    console.log(response.data);

    return {
        props: {
            categoryList: response.data,
        },
    };
});
