const  mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb+srv://mohdaqib12011004:0mHQFykjlUU7imll@cluster0.jfjoddb.mongodb.net/Health&Fitnes';
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(() => {
    console.log("sucessful");
}).catch(() => {
    console.log("failure");
});
 //Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

