import mongoose,{Document,Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export interface IUser extends Document{
    fullname:string;
    username:string;
    email:string;
    password:string;
    avatar?:string;
    gender?:string;
    phone?:string;
    address?:string;
    bio?:string;
    posts?:Array<string>;
    refreshToken?:string;
}
const userSchema:Schema<IUser> = new Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    avatar:{
        type:String,
    },
    gender:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    bio:{
        type:String,
    },
    posts:[{
        type:Schema.Types.ObjectId,
        ref:'Post'
    }],
    refreshToken:{
        type:String,
    }
},{timestamps:true});
userSchema.pre('save',async function(next):Promise<any>{
    if(!this.isModified('password')){
        return next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})
userSchema.methods.isPasswordCorrect = async function(password:string):Promise<boolean>{
    return await bcrypt.compare(password,this.password)
}
