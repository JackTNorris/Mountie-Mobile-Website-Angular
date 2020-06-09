const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {admin} = require('../middleware/admin');

export const generateExpressApp = (adminProtected?: boolean) => {
    const app = express();
    app.use(cors({origin: true}));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    if(adminProtected)
    {
        app.use(admin)
    }
    return app;
}