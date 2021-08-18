const mongoose = require("mongoose");
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.BD_CONNECTION, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('conection ok');
    } catch (error) {
        console.log('Error in conection', error);
        throw new Error("Error conection to BD");
    }
}
module.exports = { dbConnection };