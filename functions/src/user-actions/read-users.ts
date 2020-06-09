import * as admin from 'firebase-admin';
import {Request, Response} from 'express'


export default async (req: Request, res: Response) => {
    try {
        res.send(await (await admin.auth().listUsers()).users);
    }
    catch(error)
    {
        console.log(error)
        res.status(400).end();
    }
}

  // Start listing users from the beginning, 1000 at a time.
