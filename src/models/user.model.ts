import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  phone: {type: String, required: true}
})

export const User = mongoose.model('User',UserSchema,'user');





