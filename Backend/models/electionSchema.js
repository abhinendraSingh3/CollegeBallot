//this schema defines the title of the event happening,the start time and the end time and is voting active?
import mongoose from "mongoose";
import candidateSch from "./candidate.js";

const electionSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:['pending','active','closed'],
        default:'pending'
    },
    startdate:{
        type:Date,
        required:true
    },
    enddate:{
        type:Date,
    },
    createdat:{
        type:Date,
        default:Date.now
    }

})
 //exports to use in schemas
// 2026-03-14  → date
// T           → separator
// 10:30:00    → time
// Z           → UTC timezone

export default mongoose.model('electionSch',electionSchema)
;