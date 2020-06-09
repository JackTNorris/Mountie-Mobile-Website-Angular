import { NextFunction, Request, Response } from "express";
import * as fireAdmin from "firebase-admin";

export const admin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(await (await fireAdmin.auth().verifyIdToken(<string>req.query.idToken)).auth)
            next()
        else
            throw new Error();
    }
    catch(error) {
        next(error);
    }

}