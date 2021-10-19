const mongoose =require('mongoose')
const Profile = new mongoose.Schema({
    firstname :{type:String,required:[true,'Please provide first name'],trim:true},
    email:{type:String,required:[true,'Please provide email'],trim:true},
    lastname :{type:String ,required:[true,'Please provide last name'],trim:true},
    college :{type:String ,required:[true,'Please provide college name'],trim:true},
    phoneno :{type:Number ,required:[true,'Please provide your phoneno'],trim:true},
    passoutyear :{type:Number ,required:[true,'Please provide your passoutyear'],trim:true,
    enum:{values:[2021,2022,2023,2024,2025,2026], message:'This value is not supported'}
     ,default:2024},
    address :{type:String ,required:[true,'Please provide address'],trim:true},
    pincode :{type:Number ,required:[true,'Please provide pincode'],trim:true},
    createdAt:{type:Date, default:Date.now(),},
    
})


const model =mongoose.model('Profile',Profile)
module.exports={model}