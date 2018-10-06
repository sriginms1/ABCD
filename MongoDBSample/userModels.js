
const mongo = require('./mongoose_db')

var User = mongo.model("User", {
    name : {type: String, 
            required: [true, 'Don\'t you have a name?'],
            minLength: 5 
        },
    age : {type : Number}
})

module.exports = User