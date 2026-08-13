const entrymodel = require("../models/entrymodel");

//create entry
async function createEntry(req, res) {

    const {
        date,
        sleep,
        mood,
        energy,
        focus,
        exercise,
        studyHours,
        screenTime
    } = req.body;

    try {

        const entryAlreadyExists = await entrymodel.findOne({
            userId: req.user.id,
            date: date
        });

        if(entryAlreadyExists){
            return res.status(400).json({
                message: "entry already exists for this date"
            });
        }

        const entry = await entrymodel.create({
            userId: req.user.id,
            date,
            sleep,
            mood,
            energy,
            focus,
            exercise,
            studyHours,
            screenTime
        });

        res.status(200).json({
            message: "entry created successfully",
            entry: entry,
        });

    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "failed to create entry"
        });

    }
}


//get all entries
async function getEntries(req, res) {

    try {

        const entries = await entrymodel.find({
            userId: req.user.id
        }).sort({ date: -1 });

        res.status(200).json({
            message: "entries fetched successfully",
            entries: entries
        });

    } catch(error) {

        res.status(500).json({
            message: "failed to fetch entries"
        });

    }
}


//get today's entry
async function getTodayEntry(req, res) {

    try {

        const today = new Date().toISOString().split("T")[0];

        const entry = await entrymodel.findOne({
            userId: req.user.id,
            date: today
        });

        res.status(200).json({
            message: "today's entry fetched successfully",
            entry: entry
        });

    } catch(error) {

        res.status(500).json({
            message: "failed to fetch today's entry"
        });
        console.log(error)

    }
}


//delete entry
async function deleteEntry(req, res) {

    try {

        const entry = await entrymodel.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if(!entry){
            return res.status(404).json({
                message: "entry not found"
            });
        }

        res.status(200).json({
            message: "entry deleted successfully"
        });

    } catch(error) {

        res.status(500).json({
            message: "failed to delete entry"
        });

    }
}


module.exports = {
    createEntry,
    getEntries,
    getTodayEntry,
    deleteEntry
};
