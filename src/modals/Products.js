
const mongo = require('mongoose');
const {Types} = mongo.Schema;

const schema = new mongo.Schema({
    productId: {
        type: Types.String,
        required: true
    },
    returnNumber: {
        type: Types.String,
        required: false
    },
    

})
