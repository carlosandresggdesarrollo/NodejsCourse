const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mydatabase')
.then(db => console.log(" Db is conncted to ", db.connection.host))
.catch(err => console.error(err));