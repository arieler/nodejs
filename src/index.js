// Deps Loading
const express = require('express');
const app = express();
const db = require('./persistence');

// Routes Loading
const getItems = require('./routes/getItems');
const addItem = require('./routes/addItem');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');

app.use(require('body-parser').json());
app.use(express.static(__dirname + '/static'));

//Routes Binding
app.get('/items', getItems);
app.post('/items', addItem);
app.put('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

//DB Initialize
db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

//DB Shutdown
const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

//Processes Signals
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

// Sent by nodemon
process.on('SIGUSR2', gracefulShutdown);