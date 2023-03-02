import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    subject: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const token = authToken.split(" ")[1];

    try {
        //Validar esse token.
        const { subject } = verify(token, process.env.JWT_SECRET) as Payload;

        //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
        req.user_id = subject;

        return next();
    } catch (err) {
        return res.status(401).end();
    }
}
