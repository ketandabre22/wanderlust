const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo_db = "mongodb://127.0.0.1:27017/wanderlust";


main().then(() => {
      console.log('Database connection successful');
}).catch(err => {
      console.error('Database connection error:', err);
}
);


async function main() {
    await mongoose.connect(mongo_db);
    console.log('Connected to MongoDB');
}

app.get('/', (req, res) => {
      res.send('Hello World!');
}
);


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
