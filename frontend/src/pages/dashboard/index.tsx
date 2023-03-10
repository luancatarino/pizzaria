import { Header } from "@/components/Header";
import { ModalOrder } from "@/components/ModalOrder";
import { setUpAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import Modal from "react-modal";
import styles from "./styles.module.scss";

type OrderProps = {
    id: string;
    table: string | number;
    status: boolean;
    draft: boolean;
    name: string | null;
};

interface HomeProps {
    orders: OrderProps[];
}

export type OrderItemProps = {
    id: string;
    order_id: string;
    amount: number;
    product_id: string;
    product: {
        id: string;
        name: string;
        description: string;
        price: string;
        banner: string;
    };
    order: {
        id: string;
        table: string | number;
        status: boolean;
        name: string | null;
    };
};

export default function Dashboard({ orders }: HomeProps) {
    const [orderList, setOrderList] = useState(orders || []);
    const [modalItem, setModalItem] = useState<OrderItemProps[] | any>();
    const [modalVisible, setModalVisible] = useState(false);

    const handleCloseModalView = () => {
        setModalVisible(false);
    };

    const handleOpenModalView = async (id: string) => {
        const apiClient = setUpAPIClient();

        const response = await apiClient.get("order/detail", {
            params: {
                order_id: id,
            },
        });

        setModalItem(response.data);
        setModalVisible(true);
    };

    const handleFinishOrder = async (id: string) => {
        const apiClient = setUpAPIClient();

        await apiClient.put("/order/finish", {
            order_id: id,
        });

        const response = await apiClient.get("/orders");

        setOrderList(response.data);

        setModalVisible(false);
    };

    const handleRefreshOrders = async () => {

        const apiClient = setUpAPIClient();

        const response = await apiClient.get("/orders")

        setOrderList(response.data);
    }

    Modal.setAppElement("#__next");

    return (
        <>
            <Head>
                <title>Panel</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <div className={styles.containerHeader}>
                        <h1>Last Orders</h1>

                        <button onClick={handleRefreshOrders}>
                            <FiRefreshCcw size={25} color="#3fffa3" />
                        </button>
                    </div>
                    <article className={styles.listOrders}>
                        {orderList.length === 0 && (
                            <span className={styles.emptyList}>No orders found</span>
                        )}

                        {orderList.map((item) => (
                            <section key={item.id} className={styles.orderItem}>
                                <button onClick={() => handleOpenModalView(item.id)}>
                                    <div className={styles.tag}></div>
                                    <span>Mesa {item.table}</span>
                                </button>
                            </section>
                        ))}
                    </article>
                </main>

                {modalVisible && (
                    <ModalOrder
                        handleFinishOrder={handleFinishOrder}
                        isOpen={modalVisible}
                        onRequestClose={handleCloseModalView}
                        order={modalItem}
                    />
                )}
            </div>
        </>
    );
}

export const getServerSideProps = canSSRAuth(async (context: any) => {
    const apiClient = setUpAPIClient(context);

    const response = await apiClient.get("/orders");

    return {
        props: {
            orders: response.data,
        },
    };
});
