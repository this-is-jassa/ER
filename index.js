const express = require('express');
const app = express();
const cors = require('cors');
const morgon = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const rfs = require('rotating-file-stream');
const cookie = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const { PORT, NODE_ENV, MONGO_CONNECTION_STRING } = require('./config');



//DB Connection
(async function () {
    try {
        await mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, });
        console.log('Connected to the database');
    } catch (error) {
        console.log(err);
    }
})();



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
    app.use(morgon('dev'));
}

app.set('trust proxy', 1);
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookie());



app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
});
