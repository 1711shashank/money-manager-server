const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const db_link = process.env.MONGO_URL;

mongoose.set('strictQuery', false);
mongoose.connect(db_link)
    .then(() => {
        console.log("db connected");
    }).catch((err) => {
        console.log(err);
    })

const transactionData = mongoose.Schema([{
    date: String,
    data: [],
}])

const db = mongoose.model("transactionData", transactionData);
module.exports = { db };