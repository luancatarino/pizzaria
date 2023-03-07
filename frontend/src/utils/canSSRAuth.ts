import { AuthTokenError } from "@/services/errors/AuthTokenError";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";

export function canSSRAuth<P>(fn: GetServerSideProps<any>) {
    return async (context: GetServerSidePropsContext): Promise<any> => {
        const cookies = parseCookies(context);

        const token = cookies["@pizzeria.token"];

        if (!token) {
            return {
                redirect: {
                    destination: "/",
                    permanent: false,
                },
            };
        }

        try {
            return await fn(context);
        } catch (error) {
            if (error instanceof AuthTokenError) {
                destroyCookie(context, "@pizzeria.token");

                return {
                    redirect: {
                        destination: "/",
                        permanent: false,
                    },
                };
            }
        }
    };
}

// export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
//     return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
//         const cookies = parseCookies(context);

//         const token = cookies["@pizzeria.token"];

//         if (!token) {
//             return {
//                 redirect: {
//                     destination: "/",
//                     permanent: false,
//                 },
//             };
//         }

//         try {
//             return await fn(context);
//         } catch (error) {
//             if (error instanceof AuthTokenError) {
//                 destroyCookie(context, "@pizzeria.token");

//                 return {
//                     redirect: {
//                         destination: "/",
//                         permanent: false,
//                     },
//                 };
//             }
//         }
//     };
// }
