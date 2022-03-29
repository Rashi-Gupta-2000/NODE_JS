const mongoose = require("mongoose");
const UserSchema = require("../models/User");
const { use } = require("../routes");
//const { use } = require("../routes");

class UserService{
    getUsers(){
        // let User = mongoose.model("User", UserSchema);
        let User = this.getModel();
        return User.find({isDel: false}).select(["-salt","-hash"])
    }

    async createUser(userObj){
        let User = this.getModel();
        
        if(userObj["_id"] !== undefined){
            return User.updateOne({_id:userObj["_id"]}, {$set:userObj})
        }else{
            //console.log(userObj);
            const userInstance = new User(userObj);
            //console.log(userInstance)
            userInstance.setPassword(userObj["password"])
            const result = await userInstance.save();
            return result;
        }
    }

    async loginUser(loginObject){
        let User = this.getModel();
        let founduser = User.findOne({email: loginObject.emailId})

        if(founduser){
            
                const user = founduser;

                if(user.validatePassword(loginObject.password)){
                    user.hash = "";
                    user.salt = "";
                    return user;
                }
                else{
                    return {};
                }
            }
            else{
                return {};
            }
    }

    deleteUser(id){
        let User = this.getModel();
        return User.updateOne({_id: id}, {$set: {isDel: true}})
    }
    
    getModel(){
        return mongoose.model("User", UserSchema);
    }
}

module.exports = UserService;