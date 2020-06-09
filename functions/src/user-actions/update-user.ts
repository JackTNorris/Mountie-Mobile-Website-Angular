import * as admin from 'firebase-admin';
import {Request, Response} from 'express'


export default async (req: Request, res: Response) => {
    try {
        const uid: string = await (await admin.auth().createUser(req.body.userDetails)).uid;
        if(req.body.isAdmin)
            await admin.auth().setCustomUserClaims(uid, {admin: true});
        else
            await admin.auth().setCustomUserClaims(uid, {admin: false});
        res.end();
    }
    catch(error)
    {
        console.log(error)
        res.status(400).end();
    }

}