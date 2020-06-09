import * as admin from 'firebase-admin';
import {Request, Response} from 'express'


export default async (req: Request, res: Response) => {
    try {
        await admin.auth().deleteUser(req.body.uid);
        res.end();
    }
    catch(error)
    {
        console.log(error)
        res.status(400).end();
    }
}