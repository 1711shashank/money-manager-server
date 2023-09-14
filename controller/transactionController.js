const { db } = require('../models/mongoDB');

module.exports.getData = async function getData(req, res) {
    try {

        let data = await db.find();

        res.status(200).json({
            data: data
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports.addData = async function addData(req, res) {
    try {

        const { date, data } = req.body;

        console.log(date, data);

        await db.findOneAndUpdate(
            { date: date }, // filter
            { $addToSet: { data: data } }, // update
            { upsert: true, new: true } // conduction
        );


        res.status(200).json({
            Message: "User data added successfully"
        });

    } catch (err) {
        console.log(err);
    }
}
