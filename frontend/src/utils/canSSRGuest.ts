import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function canSSRGuest<P>(fn: GetServerSideProps<any>) {
    return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(context);

        if (cookies["@pizzeria.token"]) {
            return {
                redirect: {
                    destination: "/dashboard",
                    permanent: false,
                },
            };
        }

        return await fn(context);
    };
}
