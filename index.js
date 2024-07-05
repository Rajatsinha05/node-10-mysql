
const express = require('express');
const db = require('./config/db');
const User = require('./models/user.model');


const app = express()
app.use(express.json())
app.get('/', async (req, res) => {
    let user = await User.findAll()
    res.send(user);

})
app.post('/', async (req, res) => {
    let user = await User.create(req.body)

    res.send(user);
});

app.patch('/:id', async (req, res) => {
    let { id } = req.params
    let user = await User.findByPk(id)
    user.update(req.body)
    res.send(user);

 })

app.delete('/:id', async (req, res) => {
    let { id } = req.params
    let user = await User.findByPk(id)
    user.destroy()

    res.send(user);
});


app.listen(8090, async () => {
    console.log("listening on port 8090");
    await db.sync()
    console.log("connection established to the database");
})