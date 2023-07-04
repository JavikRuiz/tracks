const mongoose = require("mongoose")

const TrakcsScheme = new mongoose.Schema(
    {
        name: {
            type:String
        },
        album: {
            type:String
        },
        cover: {
            type:String,
            validate: {
                validator: () => {
                    return true
                },
                message : "ERROR_URL"
            }
        },
        artist: {
            name:{
                type:String
            },
            nickname: {
                type:String
            },
            nacionality: {
                type:String
            }
        },
        duration: {
            start:{
                type:Number
            },
            end: {
                type:Number
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps:true,
        versionkey:false
    }
)

module.exports = mongoose.model("tracks", TrakcsScheme)