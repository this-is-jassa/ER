
const mongo = require('mongoose');
const { Types } = mongo.Schema;

const schema = new mongo.Schema({
    productId: {
        type: Types.String,
        required: true
    },
    returnNumber: {
        type: Types.String,
        required: false
    },
    productName: {
        type: Types.String,
        required: true
    },
    client: {
        type: Types.ObjectId,
        ref: 'users'
    }

});

module.exports = mongo.model('products', schema);
