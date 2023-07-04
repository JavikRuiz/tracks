const mongoose = require("mongoose")

const dbConnect = () => {
    const DB_URI = process.env.DB_URI_MONGO
    mongoose.set("strictQuery", false)
    mongoose.connect(
        DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err, res) => {
            if(!err) {
                console.log("conexion correcta ")
            } else {
                console.log("error de conexion")
            }
        }
    )
}

module.exports = dbConnect