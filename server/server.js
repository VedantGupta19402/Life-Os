require("dotenv").config();
const app = require('./src/app')
const connectDb = require('./src/lib/mongodb')

app.listen(3000, () => {
    console.log('Server started on port 3000')
    connectDb();
});  