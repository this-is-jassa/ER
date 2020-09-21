const express = require('express');
const mongoose = require('mongoose');
const { PORT, NODE_ENV, MONGO_CONNECTION_STRING, SENDGRID_API_KEY } = require('../config');


class Composer {
    constructor() {
        this.app = express();
        this.cors = require('cors');
        this.morgon = require('morgan');
        this.helmet = require('helmet');
        this.bodyParser = require('body-parser');
        this.compression = require('compression');
        this.rfs = require('rotating-file-stream');
        this.cookie = require('cookie-parser');
        this.path = require('path');
        this.mongoose = require('mongoose');
        this.sgMail = require('@sendgrid/mail');

        this.app.set('trust proxy', 1);
        this.app.use(this.helmet());
        this.app.use(this.cors());
        this.app.use(this.compression());
        this.app.use(this.bodyParser.urlencoded({ extended: true }));
        this.app.use(this.bodyParser.json());
        this.app.use(this.cookie());


        if (NODE_ENV === 'production') {
            let accessLogStream = rfs.createStream('access.log', {
                interval: '1d',
                path: path.join(__dirname, 'log')
            });
            app.use(morgon('combined', { stream: accessLogStream }));
            app.use(express.static('client/build'));
            app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
            });

        } else {
            this.app.use(this.morgon('dev'));
        }
    }

    async connectDB() {
        try {
            await mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, });
            this.sgMail.setApiKey(SENDGRID_API_KEY);
            console.log('Connected to the database');
        } catch (err) {
            console.log(err);
        }
    }

    listen() {
        this.app.listen(PORT, () => {
            console.log(`Listening to the port ${PORT}`);
        });
    }

    getApp() {
        return this.app;
    }
}

module.exports = Composer;
