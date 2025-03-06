import mongoose, { trusted } from "mongoose";

const productSchema = new mongoose.Schema({
    key : {
        type : String,
        required : true,
        unique : trusted
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true         
    },
    category : {
        type : String,
        required : true,
        default : "uncategorized"
    },
    dimensions : {
        type : String,
        required : true 
    },
    description : {
        type : String,
        required : true
    },
    availability : {
        type : Boolean,
        required : true,
        default : true
    },
    image : {
        type : [String],
        required : true,
        default : ["https://plus.unsplash.com/premium_photo-1664195074818-8a157896dc55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXVkaW98ZW58MHx8MHx8&w=1000&q=80"]
    }
});

const Product = mongoose.model('Product' ,productSchema)  ;

export default Product ;