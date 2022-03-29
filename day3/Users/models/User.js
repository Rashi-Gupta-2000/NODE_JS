const {Schema} = require("mongoose")

const crypto = require("crypto")

const UserSchema = new Schema({
    fullname: String,
    email: String,
    gender: String,
    phone: String,
    isDel: {
        type: Boolean,
        default: false
    },
    salt: String,
    hash: String
})


//abc --> original password
// 19887asdjhb223 --> encrypted password
UserSchema.method.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString("hex")
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 1000,"sha512").toString("hex")
}

//please enter your pwd --> XXXX = abd
UserSchema.method.validatePassword = function(password){
    var newhash = crypto.pbkdf2Sync(password, this.salt, 1000, 1000,"sha512").toString("hex")
    return this.hash === newhash  // 19887asdjhscjakncab223
}


module.exports = UserSchema;