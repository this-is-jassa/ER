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
        minlength: 8,
        maxlength: 41,
        required: true
    },
    email: {
        type: Types.String,
        required: true
    },
    notifyEmails: [Types.String],
    groups: [{
        type: Types.ObjectId, 
        ref: "Groups",
        required: true,
        default: mongoose.Types.ObjectId("5e88de511c9d440000e1c257")
    }],

});

module.exports = mongo.model('users', schema);
