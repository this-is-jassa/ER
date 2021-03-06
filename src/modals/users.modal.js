const mongo = require('mongoose');
const { Types } = mongo.Schema;

const schema = new mongo.Schema({

    domain: {
        type: Types.String,
        required: true
    },
    clientName: {
        type: Types.String,
        required: true
    },
    password: {
        type: Types.String,
        required: true
    },
    email: {
        type: Types.String,
        required: true
    },
    notifyEmails: [Types.String],
    group: [Types.String]

});

module.exports = mongo.model('users', schema);
